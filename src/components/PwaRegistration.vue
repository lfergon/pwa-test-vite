<template>
  <div v-if="offlineReady || needRefresh" class="section-reload">
    <div class="message mt-1">
      <span v-if="offlineReady"> App ready to work offline </span>
      <span v-else>New content available, click on reload button to update.</span>
    </div>
    <div class="buttons flex align-middle mt-2 md:mt-0">
      <button v-if="needRefresh" @click="updateServiceWorker()" class="button-pwa">
        Reload
      </button>
      <button @click="close" class="button-pwa">
        Close
      </button>
    </div>
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
  .button-pwa {
    border-radius: 4px;
    background-color: #2c3e50;
    color: #ffffff;
    padding: 10px;
    margin: 10px;
    border: 1px solid #000000;
    cursor: pointer;
    font-weight: 450;
    font-size: 12px;
  }
  .section-reload {
    background-color: #f9cd0b;
    border-radius: 5px;
    color: #ffffff;
    padding: 10px;
  }
</style>
