<template>
  <div v-if="offlineReady || needRefresh" class="notification is-warning">
    <button @click="close" class="delete"></button>
    <h5 v-if="offlineReady"> App ready to work offline </h5>
    <h5 v-else>New content available, click on reload button to update.</h5>
    <button v-if="needRefresh" @click="updateServiceWorker()" class="button is-dark is-medium">
      Reload
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRegisterSW } from "virtual:pwa-register/vue";

export default defineComponent({
  name: "ReloadPWA",
  setup() {
    const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW();
    const close = async () => {
      offlineReady.value = false;
      needRefresh.value = false;
    };
    return { offlineReady, needRefresh, updateServiceWorker, close };
  }
});
</script>

<style scoped>
</style>
