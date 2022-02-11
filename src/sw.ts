import { precacheAndRoute } from 'workbox-precaching';

declare const self: ServiceWorkerGlobalScope;

const cacheName = '::serviceworker';
const version = 'v0.0.4';

self.addEventListener('message', (event: ExtendableMessageEvent) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('install', function (event: ExtendableEvent) {
  event.waitUntil(
    caches.open(`${version}${cacheName}`).then(function (cache: Cache) {
      return cache.addAll([
        '/',
        '/home',
        '/offline',
        '/tea',
        '/star-wars-films',
        'https://tignum.com/static/8276fa47544f39169bd89d07d1bfc054/ff82d/Web_363x203_2_1_5b9ec4e6f4.png',
      ]);
    })
  );
});

self.addEventListener('activate', function (event: ExtendableEvent) {
  event.waitUntil(
    caches.keys().then(function (keys: string[]) {
      return Promise.all(
        keys
          .filter(function (key) {
            return key.indexOf(version) !== 0;
          })
          .map(function (key) {
            return caches.delete(key);
          })
      );
    })
  );
});

self.addEventListener('fetch', function (event: FetchEvent) {
  const request = event.request;
  // console.log(request);
  // console.log(request.headers.get('Accept')?.indexOf('text/html'));
  console.log('Accept headers: ', request.headers.get('Accept'));
  if (request.method !== 'GET') {
    event.respondWith(
      fetch(request).catch(function () {
        return caches.match('/offline');
      }) as Promise<Response>
    );
    return;
  }

  // For HTML requests, try the network first, fall back to the cache,
  // finally the offline page
  if (
    request.headers.get('Accept')?.indexOf('text/html') !== -1 &&
    request.url.startsWith(this.origin)
  ) {
    // The request is text/html, so respond by caching the
    // item or showing the /offline offline
    event.respondWith(
      fetch(request)
        .then(function (response: Response) {
          // Stash a copy of this page in the cache
          const copy = response.clone();
          caches.open(version + cacheName).then(function (cache: Cache) {
            cache.put(request, copy);
          });
          return response;
        })
        .catch(function () {
          return caches
            .match(request)
            .then(function (response: Response | undefined) {
              // return the cache response or the /offline page.
              return response || caches.match('/offline');
            });
        }) as Promise<Response>
    );
    return;
  }

  const requestURL = new URL(event.request.url);

  if (requestURL.origin === location.origin) {
    // Load static assets from cache if network is down
    if (
      /\.(css|js|woff|woff2|ttf|eot|svg|jpeg|png|jpg|mp4)$/.test(
        requestURL.pathname
      )
    ) {
      event.respondWith(
        caches.open(cacheName).then((cache) =>
          caches.match(event.request).then((result: Response | undefined) => {
            if (!navigator.onLine) {
              // We are offline so return the cached version immediately, null or not.
              return result;
            }
            // We are online so let's run the request to make sure our content
            // is up-to-date.
            return fetch(event.request).then((response: Response) => {
              // Save the result to cache for later use.
              cache.put(event.request, response.clone());
              return response;
            });
          })
        ) as Promise<Response>
      );
      return;
    }
  }

  // For non-HTML requests, look in the cache first, fall back to the network
  if (
    request.headers.get('Accept')?.indexOf('text/plain') === -1 &&
    request.url.startsWith(this.origin)
  ) {
    event.respondWith(
      caches.match(request).then(function (response: Response | undefined) {
        return (
          response ||
          fetch(request)
            .then(function (response: Response) {
              const copy = response.clone();

              if (
                copy.headers.get('Content-Type')?.indexOf('text/plain') === -1
              ) {
                caches.open(version + cacheName).then(function (cache: Cache) {
                  cache.put(request, copy);
                });
              }

              return response;
            })
            .catch(function () {
              // you can return an image placeholder here
            })
        );
      }) as Promise<Response>
    );
    return;
  }
});

// self.__WB_MANIFEST is default injection point
precacheAndRoute(self.__WB_MANIFEST);
