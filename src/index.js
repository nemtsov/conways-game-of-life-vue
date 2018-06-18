import Vue from 'vue';
import Vuex from 'vuex';
import App from './components/App.vue';
import store from './store';

Vue.use(Vuex);

new Vue({
  el: '#container',
  store: new Vuex.Store(store),
  render: h => h(App)
});
