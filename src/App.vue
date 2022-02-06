<template>
  <div class="columns">
    <div class="column">
      <PwaPrompt/>
      <ReloadPWA/>
    </div>
  </div>
  <div class="columns">
    <div class="column"></div>
    <div class="column">
      <HomeHeader/>
      <router-view />
    </div>
    <div class="column"></div>
  </div>
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
    PwaPrompt
  }
});
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
