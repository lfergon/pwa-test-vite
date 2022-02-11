import '../node_modules/bulma/css/bulma.css';
import { createApp, provide, h } from 'vue';
import { ApolloClients } from '@vue/apollo-composable';
import { apolloClient } from '@/client/ApolloClient';
import App from '@/App.vue';
import { router } from '@/router';
import { spaceXApolloClient } from '@/client/SpaceXApolloClient';

createApp({
  setup() {
    provide(ApolloClients, {
      default: apolloClient,
      startWarsClient: spaceXApolloClient,
    });
  },
  render: () => h(App),
})
  .use(router)
  .mount('#app');
