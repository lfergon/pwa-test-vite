<template>
  <div class="content">
    <h4>All Teas in Catalog</h4>
    <button class="button is-primary is-loading" v-if="loading">
      Loading...
    </button>
    <div class="notification is-danger" v-else-if="error">
      Error: {{ error.message }}
    </div>
    <div v-else-if="teas">
      <div class="columns is-multiline is-desktop">
        <div class="column" v-for="tea of teas" :key="tea.id">
          <CardTea
            :name="tea.name"
            :description="tea.description"
            :price="tea.price"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { getAllTea } from '@/repositories/queries/getAllTea';
  import { useResult } from '@vue/apollo-composable';
  import CardTea from '@/components/CardTea.vue';

  export default defineComponent({
    name: 'Tea',
    components: {
      CardTea,
    },
    setup() {
      const { result, loading, error } = getAllTea();
      // useResult https://v4.apollo.vuejs.org/guide-composable/query.html#result-picking
      const teas = useResult(result, null, (data) => data.teas);
      return { teas, loading, error };
    },
  });
</script>

<style scoped></style>
