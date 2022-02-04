<template>
  <ReloadPWA/>
  <home-header msg="Hello Vue 3 + Vite + TypeScript" />

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <p>
    Edit any component to test hot module replacement.
  </p>
</template>

<script lang="ts">
import HomeHeader from '../components/HomeHeader.vue';
import {defineComponent} from "vue";
import ReloadPWA from "../components/PwaRegistration.vue";

export default defineComponent({
  name: 'Home',
  components: {
    ReloadPWA,
    HomeHeader
  }
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
