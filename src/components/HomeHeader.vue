<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img alt="Vue logo" src="../assets/logo.png" />
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="showNav = !showNav"
        :class="{ 'is-active': showNav }"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': showNav }"
    >
      <div class="navbar-end">
        <router-link to="/" class="navbar-item">Counter</router-link>
        <router-link to="/home" class="navbar-item">Home</router-link>
        <router-link to="/tea" class="navbar-item">Tea</router-link>
        <router-link to="/space-x-missions" class="navbar-item"
          >Space X Missions</router-link
        >
        <router-link to="/offline" class="navbar-item">Offline</router-link>
        <ShareUrl />
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import ShareUrl from '@/components/ShareUrl.vue';

  export default defineComponent({
    name: 'HomeHeader',
    components: { ShareUrl },
    setup() {
      let showNav = ref(false);
      return {
        showNav,
      };
    },
  });
</script>
