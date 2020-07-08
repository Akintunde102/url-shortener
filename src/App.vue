<template>
  <div id="app">
    <Header title="URL Shortener" />
    <Form />
    <HelloWorld />
    <UrlList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue';
import HelloWorld from './components/HelloWorld.vue';
import Form from './components/Form.vue';
import UrlList from './components/UrlList.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Header,
    HelloWorld,
    Form,
    UrlList,
  },
});
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
