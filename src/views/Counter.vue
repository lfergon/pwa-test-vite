<template>
  <div class="content">
    <h1>This is the Counter page</h1>
    <h3>The count is {{ count }}</h3>
    <div class="field is-grouped">
      <p class="control">
        <button class="button is-primary" @click="increment(1)">+</button>
      </p>
      <p class='control'>
        <button class="button is-link" @click="decrement(1)">-</button>
      </p>
    </div>

    <h4>Image loaded from url (offline test service worker fetch test purposes)</h4>
    <Image image-src="https://tignum.com/static/8276fa47544f39169bd89d07d1bfc054/ff82d/Web_363x203_2_1_5b9ec4e6f4.png"/>
    <h4>Image loaded from local (offline test service worker fetch test purposes)</h4>
    <Image image-src="../test_image.png"/>
    <br>
    <figure class="image">
      <iframe class="has-ratio" width="320" src="https://d2gjspw5enfim.cloudfront.net/210512_tignum_rz.mp4" allowfullscreen></iframe>
    </figure>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useCounter from '@/domain/useVueCounter';
import Image from '@/components/Image.vue';

export default defineComponent({
  name: 'Counter',
  components: {
    Image
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
