<template>
  <img :src="imageSrc" alt="Image" width="320" class="image is-center">
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Image',
    props: {
      imageSrc: {
        type: String,
        required: true
      }
    },
    setup(props) {
      const {imageSrc} = props;
      return {
        imageSrc
      }
    }
  });
</script>

<style scoped>
</style>
