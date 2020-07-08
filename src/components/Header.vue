<template>
  <h1>{{title}}</h1>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  props: ['Title'],
});
</script>

<style>
</style>
