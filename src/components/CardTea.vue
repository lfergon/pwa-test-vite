<template>
  <div class="card">
    <div class="card-image">
      <img class="is-16x16" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIF.TiQayPYoAEYS7DFG4nGdvw%26pid%3DApi&f=1" alt="Placeholder image">
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ name }}</p>
          <p class="subtitle is-6"></p>
        </div>
      </div>
      <div class="content">
        {{ description }} <strong> {{ price }} EUR </strong>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'CardTea',
    props: {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      }
    },
    setup(props: { name: string; description: string; price: number; }) {
      const { name, description, price } = props;
      return {
        name,
        description,
        price
      };
    },
  });
</script>

<style scoped>

</style>
