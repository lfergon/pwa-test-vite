<template>
  <div class="container has-text-centered">
    <div class="columns">
      <div class="column">
        <PwaPrompt />
        <ReloadPWA />
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <HomeHeader />
        <router-view />
      </div>
    </div>
  </div>
  <footer class="footer">
    <div class="content has-text-centered">
      <h5>
        <strong>PWA Vite, Vue3 test</strong>
      </h5>
    </div>
  </footer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import ReloadPWA from '@/components/PwaRegistration.vue';
  import PwaPrompt from '@/components/PwaPrompt.vue';
  import HomeHeader from '@/components/HomeHeader.vue';

  export default defineComponent({
    name: 'App',
    components: {
      HomeHeader,
      ReloadPWA,
      PwaPrompt,
    },
  });
</script>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 2rem;
  }
</style>
