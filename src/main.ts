import '../node_modules/bulma/css/bulma.css';
import { createApp, provide, h } from 'vue';
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
      fontFamily: "Tahoma, sans-serif",
      backgroundColor: "red",
      color: "white"
    });
  },
  render: () => h(App),
})
  .use(router)
  .mount('#app');
