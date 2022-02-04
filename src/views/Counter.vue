<template>
  <ReloadPWA/>
  <home-header msg="Hello Vue 3 + Vite + TypeScript" />
  <h1>This is the Counter page</h1>
  <h3>The count is {{ count }}</h3>
  <button class="button-counter" @click="increment(1)">+</button>
  <button class="button-counter" @click="decrement(1)">-</button>
  <h4>Image loaded from url (offline test service worker fetch test purposes)</h4>
  <Image image-src="https://tignum.com/static/8276fa47544f39169bd89d07d1bfc054/ff82d/Web_363x203_2_1_5b9ec4e6f4.png"/>
  <h4>Image loaded from local (offline test service worker fetch test purposes)</h4>
  <Image image-src="../test_image.png"/>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useCounter from '@/domain/useVueCounter';
import HomeHeader from '@/components/HomeHeader.vue';
import Image from '@/components/Image.vue';

export default defineComponent({
  name: 'Counter',
  components: {
    Image,
    HomeHeader
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
  .button-counter {
    border-radius: 2px;
    background-color: #2c3e50;
    color: #ffffff;
    padding: 5px;
    margin: 5px;
    border: none;
  }
</style>
