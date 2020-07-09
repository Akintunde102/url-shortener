<template>
  <div id="app">
    <Header title="URL Shortener" />
    <Form @getUrls="getUrls($event)"/>
    <UrlList  @getUrls="getUrls($event)" :urls="urls" :urlError=urlError />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Axios from 'axios';
import Header from './components/Header.vue';
import Form from './components/Form.vue';
import UrlList from './components/UrlList.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Header,
    Form,
    UrlList,
  },
  data() {
    return {
      urls: [],
      lastCreationTime: '',
      urlError: '',
    };
  },
  methods: {
    getUrls(type = '') {
      Axios.get('/api/urls/', {
        params: {
          limit: 5,
          ...(this.lastCreationTime !== '' && type !== 'latest' ? { lastCreationTime: this.lastCreationTime } : {}),
          ...(type !== '' && type !== 'latest' ? { type } : {}),
        },
      })
        .then((response) => {
          const { status, data } = response;
          console.log({ data: data.length, status });
          if (status !== 200) {
            throw new Error('Something Went Wrong, Try Again');
          }
          if (data.length) {
            this.urls = data;
            this.lastCreationTime = data[data.length - 1].creationTime;
          }
        })
        .catch((err: Error) => {
          console.log(err);
          this.urlError = 'Something Unexpected Happened';
        });
    },
  },
  created() {
    this.getUrls();
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
