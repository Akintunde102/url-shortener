<template>
  <div>
    <h1>{{title}}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  props: ['title'],
});
</script>

<style scoped>
div {
  background-color: #fff;
  padding: 20px 0;
}
h1 {
  color: rgba(77, 75, 75, 1);
  text-align: center;
}
</style>
