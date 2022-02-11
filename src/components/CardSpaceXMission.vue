<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ name }}</p>
          <p class="subtitle is-6">
            <a :href="twitter">{{ twitter }}</a>
          </p>
        </div>
      </div>
      <div class="content">
        <h4>
          <a :href="wikipedia">{{ wikipedia }}</a>
        </h4>
        <h4>
          <a :href="website">{{ website }}</a>
        </h4>
        <strong> {{ description }} </strong>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'CardSpaceXMission',
    props: {
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      wikipedia: {
        type: String,
        required: true,
      },
      twitter: {
        type: String,
        required: false,
      },
      website: {
        type: String,
        required: true,
      },
    },
    setup(props: {
      name: string;
      description: string;
      wikipedia: string;
      website: string;
      twitter: string;
      id: string;
    }) {
      const { name, description, wikipedia, website, twitter, id } = props;
      return {
        name,
        description,
        wikipedia,
        website,
        twitter,
        id,
      };
    },
  });
</script>

<style scoped></style>
