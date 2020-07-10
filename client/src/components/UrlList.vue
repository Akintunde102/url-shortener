<template>
  <div class="list-section">
    <div class="centered">
      <div v-if="listLoading === false" class="list-view">
<h2> Previous Shortened URLs </h2>
        <div class="boxed list-header">
          <span class="longUrl-header">Original Url</span>
          <span class="time-header">Created</span>
          <span>Short Url</span>
        </div>
        <div class="url-list" v-for="(url, index) in urls" :key="index">
          <div class="boxed each-url">
            <a :href="url.longUrl" class="link longUrl"
              >{{ url.protocol }}://{{ reduceLength(url.longUrl) }}</a
            >
            <span class="time">{{ toDateTime(url.creationTime) }}</span>
            <a :href="url.shortUrl" class="link">https://{{ url.shortUrl }}</a>
          </div>
        </div>
        <div class="boxed list-footer">
          <a @click="select('next')">Next &gt;</a>
          <a @click="select('prev')">&lt; Previous</a>
        </div>
      </div>
      <div v-else class="loading"><h3>loading.... 😢</h3></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'UrlList',
  props: ['urls', 'listLoading'],
  data() {
    return {
      shortUrl: '',
      longUrl: '',
      error: '',
      lastCreationTime: '',
    };
  },
  methods: {
    toDateTime(timeInSeconds: string) {
      const dateTime = new Date(parseInt(timeInSeconds, 10) * 1000);
      const getPadded = (value: number) => `00${String(value)}`.slice(-2);
      const formattedDate = `${dateTime.getFullYear()}-${getPadded(
        dateTime.getMonth() + 1,
      )}-${getPadded(dateTime.getDate())} ${getPadded(dateTime.getHours())}:${getPadded(
        dateTime.getMinutes(),
      )}`;
      return formattedDate;
    },
    select(type: string) {
      this.$emit('getUrls', type);
    },
    reduceLength(val: string) {
      const dots = val.length > 15 ? '...' : '';
      return val.substr(0, 15) + dots;
    },
  },
});
</script>

<style scoped>
h2{
  text-align: center;
}

div {
  margin: 0 auto;
}

div.list-view{
   min-width: 300px;
   width: 70vw;
   overflow-x: scroll;
}

div.list-section {
  display: flex;
  justify-content: center;
  flex-direction: row;
}

div.list-header {
  display: flex;
  flex-direction: row;
  background-color: #cbcac9;
}

div.list-footer {
  display: flex;
  flex-direction: row-reverse;
  background-color: #cbcac9;
}

div.list-footer a {
  color: royalblue;
  margin: 0 10px;
  cursor: pointer;
}

div.list-header span {
  flex: 1;
}

div.each-url {
  display: flex;
  flex-direction: row;
}

div.each-url > * {
  flex: 1;
  padding: 10px;
  text-decoration: none;
}

div.boxed {
  padding: 10px 20px;
  border: 1px solid #cbcac9;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

span.link {
  color: royalblue;
}

span.time {

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

@media screen and (max-width: 850px) {
 span.time, span.time-header {
   display: none;
}
}

@media screen and (max-width: 650px) {
 a.longUrl, span.longUrl-header {
   display: none;
}
}
</style>
