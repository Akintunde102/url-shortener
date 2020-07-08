<template>
  <div class="list-section">
    <div class="centered">
      <div class="boxed list-header">
        <span>Original Url</span>
        <span>Created</span>
        <span>Short Url</span>
      </div>
      <div class="url-list" v-for="(url, index) in urls" :key="index">
        <div class="boxed each-url">
          <span>{{ url.long}}</span>
          <span>{{ url.created}}</span>
          <span>{{ url.short}}</span>
        </div>
      </div>
      <div class="boxed list-footer">
        <span>Next</span>
        <span>Previous</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import isUrl from '../utils/isUrl';

export default Vue.extend({
  name: 'UrlList',
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
          created: '2/2/2013',
        },
        {
          id: 2,
          created: '2/2/2013',
          short: 'https://pbid.io/abcdefgh',
          long: 'facebook.com',
        },
        {
          id: 3,
          created: '2/2/2013',
          short: 'https://pbid.io/abcdefgh',
          long: 'facebook.com',
        },
        {
          id: 4,
          created: '2/2/2013',
          short: 'https://pbid.io/abcdefgh',
          long: 'facebook.com',
        },
        {
          id: 5,
          created: '2/2/2013',
          short: 'https://pbid.io/abcdefgh',
          long: 'facebook.com',
        },
        {
          id: 6,
          created: '2/2/2013',
          short: 'https://pbid.io/abcdefgh',
          long: 'facebook.com',
        },
      ],
    };
  },
});
</script>

<style scoped>
div {
  margin: 0 auto;
}

div.list-section {
  display: flex;
  justify-content: center;
  flex-direction: row;
}

div.list-header {
  display: flex;
  flex-direction: row;
}

div.list-header span {
  flex: 1;
}

div.each-url {
  display: flex;
  flex-direction: row;
}

div.each-url span {
  flex: 1;
}

div.boxed {
  background: slategray;
  padding: 10px;
  border: 2px solid blue;
}
div.url-list {
  width: 70vw;
}

div.centered {
  padding: 5% 0;
}
h2 {
  margin: 10px 0;
  font-weight: 100;
}

h5 {
  margin: 5px 0;
  font-weight: 500;
}
</style>
