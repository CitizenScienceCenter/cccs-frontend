// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './backend/axios'
import VueAxios from 'vue-axios'
// import * as cc from './sdk/src/index'
import Swagger from 'swagger-client'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

const token = localStorage.getItem('api_key')
axios.defaults.headers.common['Authorization'] = token

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueMaterial)
// Load swagger client and SDK is created using tags and operationIds in the JSON
Swagger("http://localhost:8080/api/v1/swagger.json").then((client) => {
  Vue.prototype.$ac = client;
  console.log(client.spec);
  console.dir(client.apis);
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
})
