<template>
  <img :src='imageSrc' alt='Image' class='image'>
</template>

<script>
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
  .image {
    object-fit: cover;
    width: 50%;
    text-align: center;
    height: 250px;
  }
</style>
