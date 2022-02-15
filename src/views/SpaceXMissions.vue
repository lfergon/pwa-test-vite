<template>
  <div class="content">
    <h4>Space X Missions</h4>
    <button class="button is-primary is-loading" v-if="loading">
      Loading...
    </button>
    <div class="notification is-danger" v-else-if="error">
      Error: {{ error.message }}
    </div>
    <div v-else-if="missions">
      <div class="columns is-multiline is-desktop">
        <div
          class="column"
          v-for="mission of missions"
          :key="mission.id"
        >
          <CardSpaceXMission
            :name="mission.name"
            :wikipedia="mission.wikipedia"
            :description="mission.description"
            :twitter="mission.twitter"
            :website="mission.website"
            :id="mission.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useResult } from '@vue/apollo-composable';
  import { getSpaceXMissions } from '@/repositories/queries/getSpaceXMissions';
  import CardSpaceXMission from '@/components/CardSpaceXMission.vue';

  export default defineComponent({
    name: 'StarWarsFilms',
    components: {
      CardSpaceXMission,
    },
    setup() {
      const { result, loading, error } = getSpaceXMissions();
      const missions = useResult(result, null, (data) => data.missions);
      console.log(missions);
      return { missions, loading, error };
    },
  });
</script>

<style scoped></style>
