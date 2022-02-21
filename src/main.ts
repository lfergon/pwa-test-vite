import '../node_modules/bulma/css/bulma.css';
import { createApp, provide, h } from 'vue';
import { createPinia } from 'pinia';
import { ApolloClients } from '@vue/apollo-composable';
import { apolloClient } from '@/client/ApolloClient';
import App from '@/App.vue';
import { router } from '@/router';
import { spaceXApolloClient } from '@/client/SpaceXApolloClient';
// @ts-ignore
import AddToHomeScreen from "a2hs.js";

createApp({
  setup() {
    provide(ApolloClients, {
      default: apolloClient,
      spaceXClient: spaceXApolloClient,
    });
    AddToHomeScreen({
      brandName: "PWA test",
      fontFamily: "Tahoma, Helvetics, sans-serif",
      backgroundColor: "#bbbbbb",
      color: "white"
    });
  },
  render: () => h(App),
})
  .use(router)
  .use(createPinia())
  .mount('#app');
