import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import InstantSearch from 'vue-instantsearch';
import axios from 'axios';

Vue.use(VueAxios, axios);
Vue.use(InstantSearch);
Vue.use(VueRouter);


Vue.config.productionTip = false;

import HomeComponent from './components/HomeComponent.vue';
import EditComponent from './components/EditComponent.vue';
import InstantSearchConponent from './components/InstantSearchConponent.vue';


const routesMapping = [
  {
      name: 'home',
      path: '/',
      component: HomeComponent
  },
  {
      name: 'AlgoliaSearch',
      path: '/Search',
      component: InstantSearchConponent
  },
  {
      name: 'edit',
      path: '/edit/:id',
      component: EditComponent
  }
];

const router = new VueRouter({ mode: 'history', routes: routesMapping});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');
