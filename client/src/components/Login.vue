<template>
  <div class="form-section">
    <div class="centered">
      <h2>Login</h2>
      <form @submit="login" autocomplete="off">
        <input type="text" v-model="username" name="url" placeholder="Username" />
        <input type="password" name="pass" v-model="password" />
        <input type="submit" name="submit" value="Login" />
      </form>
      <h5>{{ error }}</h5>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Axios from 'axios';
import { mapMutations } from 'vuex';
import debug from '../utils/log';

export default Vue.extend({
  name: 'Form',
  data() {
    return {
      error: '',
      username: '',
      password: '',
    };
  },
  methods: {
    ...mapMutations(['changeLoggedStatus']),
    login(e: Event): void {
      e.preventDefault();
      debug.stringify({
        username: this.username,
        password: this.password,
      });
      Axios.post('/api/user/login', {
        params: {
          username: this.username,
          password: this.password,
        },
      })
        .then((response) => {
          const { status } = response;
          debug.stringify({ loginResponse: response });
          if (status !== 200) {
            throw new Error('Something Went Wrong, Try Again');
          }
          this.changeLoggedStatus(true);
        })
        .catch((err: Error) => {
          this.error = 'Something Unexpected Happened';
          debug.stringify(err);
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

h2 {
  margin: 10px 0;
  font-weight: 100;
}

h5 {
  margin: 5px 0;
  font-weight: 500;
}

input {
  display: block;
  height: 30px;
  width: 400px;
  margin: 15px 0;
  padding: 20px;
  border-radius: 5px;
  font-size: 25px;
}

input[type='text'] {
  color: grey;
}

input[type='submit'] {
  color: royalblue;
  font-weight: bold;
  height: 70px;
}
</style>
