<template>
  <div>
    <h1>{{title}}</h1>
    <h1 v-if="logged">
      <button type="button" v-on:click="changeLoggedStatus(false)">Log Out</button>
    </h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapMutations } from 'vuex';

export default Vue.extend({
  name: 'App',
  props: ['title', 'logged'],
  methods: {
    ...mapMutations(['changeLoggedStatus']),
  },
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

button {
  padding: 15px;
  color: #000;
  background: #fff;
  font-size: 20px;
}
</style>
