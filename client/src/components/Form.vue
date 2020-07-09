<template>
  <div class="form-section">
    <div class="centered">
      <h2>Shorten Your Long Links</h2>
      <form @submit="shorten">
        <input type="text" v-model="longUrl" name="url" placeholder="Input Original URL" />
        <input type="submit" value="SHORTEN URL" />
      </form>
      <h5>{{error}}</h5>

      <div class="shortened">
        <h3>{{shortUrl}}</h3>
        <button  :disabled="copyString==='copied'" @click="doCopy">{{copyString}}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Axios from 'axios';
import IsUrl from '../utils/isUrl';
import GetUrlProtocol from '../utils/getUrlProtocol';
import debug from '../utils/log';

export default Vue.extend({
  name: 'Form',
  data() {
    return {
      shortUrl: '',
      longUrl: '',
      error: '',
      protocol: '',
      copyString: 'copy',
    };
  },
  methods: {
    doCopy() {
      this.$copyText(this.shortUrl).then(() => {
        this.copyString = 'copied';
      }, (e) => {
        debug.show(`Error While Copying, error: ${e}`);
      });
    },
    shorten(e: Event) {
      e.preventDefault();
      const UNIXTimeStamp = Math.round(new Date().getTime() / 1000);
      if (!IsUrl(this.longUrl.toLowerCase())) {
        this.error = 'Bad Url, Check and try again';
        return;
      }
      const providedProtocol = GetUrlProtocol(this.longUrl);

      if (providedProtocol) {
        this.longUrl = this.longUrl.split('://').pop() as string;
        this.protocol = providedProtocol;
      }

      if (!providedProtocol) {
        this.protocol = 'http';
      }

      Axios.post('/api/url/', {
        longUrl: this.longUrl,
        creationTime: UNIXTimeStamp,
        protocol: this.protocol,
      })
        .then((response) => {
          const {
            status,
            data: { shortUrl },
          } = response;
          if (status !== 200) {
            throw new Error('Something Went Wrong, Try Again');
          }
          this.shortUrl = `https://${shortUrl}`;
          this.error = '';
          this.copyString = 'Copy';
          this.$emit('getUrls', 'latest');
        })
        .catch((err: Error) => {
          debug.stringify(err);
          this.error = 'Something Unexpected Happened';
        });
    },
  },
});
</script>

<style scoped>
div {
  color: white;
  margin: 0 auto;
}
div.form-section {
  background-color: royalblue;
  display: flex;
  justify-content: center;
}

div.centered {
  padding: 5% 0;
}

div.shortened {
  background-color: #fff;
  padding: 5px;
  display: flex;
  flex-direction: row;
  margin: 20px 0;
}

div.shortened h3 {
  flex: 1;
  color: royalblue;
  text-align: center;
  height: 100%;
  align-self: center;
}

div.shortened button {
  flex: 0.3;
  margin-left: 10px;
  padding: 0 5px;
  height: 35px;
  color: royalblue;
  font-weight: bold;
}

h2 {
  margin: 10px 0;
  font-weight: 100;
}

h5 {
  margin: 5px 0;
  font-weight: 500;
}

input[type='text'] {
  width: 50vw;
  height: 20px;
  color: grey;
  padding: 5px;
}

input[type='submit'] {
  margin-left: 10px;
  padding: 0 5px;
  height: 35px;
  color: royalblue;
  font-weight: bold;
}

input:hover {
}
</style>
