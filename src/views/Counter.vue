<template>
  <ReloadPWA/>
  <home-header msg="Hello Vue 3 + Vite + TypeScript" />
  <h1>This is the Counter page</h1>
  <p>The count is {{ count }}</p>
  <button class="button-counter" @click="increment(2)">+</button>
  <button class="button-counter" @click="decrement(1)">-</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useCounter from '../domain/useVueCounter';
import ReloadPWA from '@/components/PwaRegistration.vue'
import HomeHeader from '@/components/HomeHeader.vue'

export default defineComponent({
  name: 'Counter',
  components: {
    ReloadPWA,
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
