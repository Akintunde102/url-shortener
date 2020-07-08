<template>
  <div id="app">
    <span>{{ error }}</span>
    <form @submit="shorten">
      <input type="text" v-model="longUrl" name="url" />
      <input type="submit" value="Shorten" />
    </form>
    <div class="new-url">
      <span>{{shortUrl}}</span>
    </div>
    <div>
      <h2>Shortened Urls</h2>
      <div class="url-list" v-for="(url, index) in urls" :key="index">
        <span>{{ url.short}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import isUrl from '../utils/isUrl';

export default Vue.extend({
  name: 'App',
  data() {
    return {
      shortUrl: '',
      longUrl: '',
      error: '',
      urls: [
        {
          id: 1,
          short: 'https://pbid.io/abcdefgh',
          long: 'facebook.com',
        },
        { id: 2, short: 'https://pbid.io/abcdefgh', long: 'facebook.com' },
        { id: 3, short: 'https://pbid.io/abcdefgh', long: 'facebook.com' },
        { id: 4, short: 'https://pbid.io/abcdefgh', long: 'facebook.com' },
        { id: 5, short: 'https://pbid.io/abcdefgh', long: 'facebook.com' },
        { id: 6, short: 'https://pbid.io/abcdefgh', long: 'facebook.com' },
      ],
    };
  },
  methods: {
    shorten(e: Event) {
      e.preventDefault();
      if (isUrl(this.longUrl)) {
        this.error = '';
        const newUrl = `https://pbid.io/${this.longUrl}`;
        this.shortUrl = newUrl;
        return;
      }
      this.error = 'Bad Url, Check and try again';
    },
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
