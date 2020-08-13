<template>
  <div id="app">
    <Header v-bind:logged="logged" />
    <Auth
      v-if="logged === false"
      v-on:changeLoggedStatus="updateLoggedStatus($event)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Axios from 'axios';
import Header from './components/Header.vue';
import Auth from './components/Auth.vue';
import debug from './utils/log';

export default Vue.extend({
  name: 'App',
  components: {
    Auth,
    Header,
  },
  data() {
    return {
      urls: [],
      lastCreationTime: '',
      urlError: '',
      listLoading: true,
    };
  },
  computed: {
    logged() { return this.$store.state.logged; },
  },
  methods: {
    getUrls(type = ''): void {
      Axios.get('/api/urls/', {
        params: {
          limit: 5,
          ...(this.lastCreationTime !== '' && type !== 'latest'
            ? { lastCreationTime: this.lastCreationTime }
            : {}),
          ...(type !== '' && type !== 'latest' ? { type } : {}),
        },
      })
        .then((response) => {
          const { status, data } = response;
          debug.stringify({ response });
          if (status !== 200) {
            throw new Error('Something Went Wrong, Try Again');
          }
          if (data.length) {
            this.urls = data;
            this.lastCreationTime = data[data.length - 1].creationTime;
          }
          this.listLoading = false;
        })
        .catch((err: Error) => {
          this.urlError = 'Something Unexpected Happened';
          debug.stringify(err);
        });
    },
  },
  created(): void {
    this.listLoading = true;
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
