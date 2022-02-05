<template>
  <PwaPrompt/>
  <ReloadPWA/>
  <div id="nav">
    <router-link to="/">Counter</router-link> |
    <router-link to="/offline">Offline</router-link> |
    <router-link to="/home">Home</router-link>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ReloadPWA from '@/components/PwaRegistration.vue';
import PwaPrompt from '@/components/PwaPrompt.vue';


export default defineComponent({
  name: 'App',
  components: {
    ReloadPWA,
    PwaPrompt
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}

</style>
