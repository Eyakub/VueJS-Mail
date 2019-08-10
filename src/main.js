import Vue from 'vue';
import App from './App.vue';
import 'bootstrap';
import './assets/app.scss';
import './assets/css/style.css';

import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
import 'popper.js';



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
