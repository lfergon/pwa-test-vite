<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img alt="Vue logo" src="../assets/logo.png" />
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showNav }">
      <div class="navbar-end">
        <a href="" class="navbar-item">
          <router-link to="/">Counter</router-link>
        </a>

        <router-link to="/home" class="navbar-item">Home</router-link>
        <router-link to="/offline" class="navbar-item">Offline</router-link>
      </div>

    </div>
  </nav>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HomeHeader',
  setup() {
    let showNav = ref(false);
    return {
      showNav
    }
  }
});
</script>
