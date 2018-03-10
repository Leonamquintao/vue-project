import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

// Example to how to import a component globally.
// import ExComponent from 'path-to-component'
//Vue.component('ex-component', ExComponent);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
