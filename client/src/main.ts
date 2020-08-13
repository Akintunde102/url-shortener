import Vue from 'vue';
import VueClipboard from 'vue-clipboard2';
import Vuex from 'vuex';
import App from './App.vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    logged: false,
  },
  mutations: {
    changeLoggedStatus(state, status) {
      state.logged = status;
    },
  },
});

Vue.config.productionTip = false;

Vue.use(VueClipboard);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
