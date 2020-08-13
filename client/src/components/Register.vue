<template>
  <div class="form-section">
    <div class="centered">
      <h2>Register</h2>
      <form @submit="register" autocomplete="off">
        <input
        autocomplete="off" type="text" v-model="username"
        name="url" placeholder="Username" required  />
        <input type="password" name="pass" v-model="password" placeholder="Password" required />
        <input type="text" name="fullName" v-model="fullName" placeholder="Full Name" required />
        <input type="text" name="role" v-model="role" placeholder="Role" required />
        <input type="submit" name="submit" value="Register" required />
      </form>
      <h5>{{ error }}</h5>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Axios from 'axios';
import debug from '../utils/log';

export default Vue.extend({
  name: 'Form',
  data() {
    return {
      error: '',
      username: '',
      password: '',
      fullName: '',
      role: '',
      regMessage: '',
    };
  },
  methods: {
    register(e: Event): void {
      e.preventDefault();
      Axios.post('/api/user/register', {
        params: {
          username: this.username,
          password: this.password,
          fullName: this.fullName,
          role: this.role,
        },
      })
        .then((response) => {
          const { status } = response;
          debug.stringify({ registerResponse: response });
          if (status !== 200) {
            throw new Error('Something Went Wrong, Try Again');
          }
          this.regMessage = 'User Created';
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
}

input[type='text'] {
  color: grey;
}

input[type='submit'] {
  color: royalblue;
  font-weight: bold;
}
</style>
