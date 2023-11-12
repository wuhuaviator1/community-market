<!-- main.js -->
import Vue from 'vue';
import App from './App.vue';
import Login from './components/Login.vue';

Vue.component('login', Login);

new Vue({
  render: h => h(App),
}).$mount('#app');
