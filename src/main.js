// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCarousel from 'vue-carousel'
import Swagger from 'swagger-client'
import VueMaterial from 'vue-material'
import store from './store'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

// const token = localStorage.getItem('api_key')
// axios.defaults.headers.common['Authorization'] = token

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueCarousel)

// Load swagger client and SDK is created using tags and operationIds in the JSON
Swagger({url:process.env.BASE_URI,
requestInterceptor(req) {
  // req.headers['content-type'] = 'application/json'
  // TODO retrieve this from store (store.user.key)
  req.headers['X-API-KEY'] = store.getters.user
  return req
}}).then((client) => {
  console.log(client)
  Vue.prototype.$ac = client
  store.dispatch('api/set', client)
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
  })
});
