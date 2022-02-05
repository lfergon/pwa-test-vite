<template>
  <div class="prompt-install" v-if="show">
    <h4>Add Test PWA to Home Screen?</h4>

    <button class="button-prompt" @click="installPWA">
      Install!
    </button>
    <button class="button-prompt" @click="dismissPrompt">
      No, thanks
    </button>
  </div>
</template>

<script lang='ts'>
  import {defineComponent, ref} from 'vue';
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
      }

      const installPWA = () => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(() => {
          dismissPrompt();
        })
      };

      return {
        show,
        installPWA,
        dismissPrompt
      };
    }
  });
</script>

<style scoped>
  .prompt-install {
    background-color: #7f7f7f;
    border-radius: 5px;
    color: #ffffff;
    padding: 10px;
    top: 0;
  }
  .button-prompt {
    border-radius: 2px;
    background-color: #42b983;
    color: #ffffff;
    padding: 5px;
    border: none;
    font-size: 14px;
    margin: 5px;
    font-weight: 550;
    cursor: pointer;
  }
</style>
