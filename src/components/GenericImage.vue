<template>
  <img :srcset="imagesSet" :src="imageSrc" alt="Image" class="image is-center">
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'GenericImage',
    props: {
      imageSrc: {
        type: String,
        required: true
      },
      imagesSet: {
        type: String,
        required: true
      }
    },
    setup(props) {
      const {imageSrc, imagesSet} = props;
      return {
        imageSrc,
        imagesSet
      }
    }
  });
</script>

<style scoped>
</style>
