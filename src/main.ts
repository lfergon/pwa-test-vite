import '../node_modules/bulma/css/bulma.css';
import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from '@/client/ApolloClient';
import App from '@/App.vue';
import { router } from '@/router';

createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App)
}).use(router).mount('#app');
