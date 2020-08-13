<template>
  <div>
    <Login />
    <Register />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Login from './Login.vue';
import Register from './Register.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Login,
    Register,
  } });
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
