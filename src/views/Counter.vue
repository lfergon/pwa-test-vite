<template>
  <div class="content">
    <h1>This is the Counter page</h1>
    <h3>The count is {{ count }}</h3>
    <div class="field is-grouped">
      <p class="control is-center">
        <button class="button is-link" @click="decrement(1)">Decrement</button>
      </p>
      <p class="control is-center">
        <button class="button is-primary" @click="increment(1)">Increment</button>
      </p>
    </div>
    <h4>Image loaded from url (offline test service worker fetch test purposes)</h4>
    <GenericImage
      image-src="https://tignum.com/static/8276fa47544f39169bd89d07d1bfc054/ff82d/Web_363x203_2_1_5b9ec4e6f4.png"
      images-set="../flamingo4x.jpg 4025w, ../flamingo3x.jpg 3019w, ../flamingo2x.jpg 2013w, ../flamingo1x.jpg 1006w"
    />
    <h4>Responsive images using imgset</h4>
    <GenericImage
      image-src="../flamingo-fallback.jpg"
      images-set="../flamingo4x.jpg 4025w, ../flamingo3x.jpg 3019w, ../flamingo2x.jpg 2013w, ../flamingo1x.jpg 1006w"
    />
    <h4>Image loaded from local (offline test service worker fetch test purposes)</h4>
    <GenericImage image-src="../test_image.png" images-set="../test_image.png"/>
    <br>
    <video class="has-ratio" width="320" controls>
      <source src="https://d2gjspw5enfim.cloudfront.net/210512_tignum_rz.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useCounter from '@/domain/useVueCounter';
import GenericImage from '@/components/GenericImage.vue';

export default defineComponent({
  name: 'Counter',
  components: {
    GenericImage
  },
  setup() {
    const { count, increment, decrement } = useCounter();
    return {
      count,
      increment,
      decrement
    }
  }
});
</script>

<style scoped>
</style>
