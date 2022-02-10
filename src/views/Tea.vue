<template>
  <div class="content">
    <h4>
       All Tea
    </h4>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else-if="teas">
      <div class="columns is-multiline is-mobile">
        <div class="column is-one-third" v-for="tea of teas" :key="tea.id">
          <div class="card">
            <div class="card-image">
              <img class="is-16x16" src="public/teas.jpeg" alt="Placeholder image">
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">{{ tea.name }}</p>
                  <p class="subtitle is-6"></p>
                </div>
              </div>
              <div class="content">
                {{ tea.description }} <strong> {{ tea.price }} EUR </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { getAllTea } from '@/repositories/queries/getAllTea';
  import { useResult } from '@vue/apollo-composable';

  export default defineComponent({
    name: 'Tea',
    setup() {
      const {result, loading, error} = getAllTea();
      // useResult https://v4.apollo.vuejs.org/guide-composable/query.html#result-picking
      const teas = useResult(result, null, data => data.teas);
      return {teas, loading, error};
    }
  });
</script>

<style scoped></style>
