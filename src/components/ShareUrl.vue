<template>
    <button v-if="canShareUrl" class="button" @click="shareUrl">
      <span class="icon-text">
        <span class="icon">
          <i class="fas fa-envelope-open-text"></i>
        </span>
        <span>Share</span>
      </span>
    </button>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';

  export default defineComponent({
    name: 'ShareUrl',
    setup: function() {
      let canShareUrl = ref(false);
      onMounted(() => {
        if (navigator.share) {
          canShareUrl.value = true;
        }
      });
      const shareUrl = function() {
        if (navigator.share) {
          navigator.share({
            title: 'Nostalgic Netlify',
            text: 'Check out Nostalgic',
            url: 'https://nostalgic-lamport-8df19f.netlify.app/'
          })
            .then(() => console.log('Successful share'))
            .catch((error) => console.error('Error sharing', error));
        }
      };
      return {
        shareUrl,
        canShareUrl
      };
    }
  });
</script>

<style scoped>

</style>
