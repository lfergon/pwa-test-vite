<template>
  <div class="notification is-link" v-if="show">
    <button class="delete" @click="dismissPrompt"></button>
    <h4>Add Test PWA to Home Screen?</h4>
    <button class="button is-dark is-medium" @click="installPWA">
      Install!
    </button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    name: 'PwaPrompt',
    setup() {
      let show = ref(false);
      // Initialize deferredPrompt for use later to show browser install prompt.
      // https://developer.mozilla.org/en-US/docs/Web/API/BeforeInstallPromptEvent
      let deferredPrompt: Event;

      window.addEventListener('beforeinstallprompt', (event: Event) => {
        event.preventDefault();
        deferredPrompt = event;
        show.value = true;
      });

      const dismissPrompt = () => {
        show.value = false;
      };

      const installPWA = () => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(() => {
          dismissPrompt();
        });
      };

      return {
        show,
        installPWA,
        dismissPrompt,
      };
    },
  });
</script>

<style scoped></style>
