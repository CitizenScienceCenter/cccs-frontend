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
import './assets/styles/theme.scss'
import VuexRouterSync from 'vuex-router-sync'
import VueBreadcrumbs from 'vue-2-breadcrumbs'
import VueI18n from 'vue-i18n'
import messages from './localisation/locale'

Vue.use(VueI18n)
Vue.config.productionTip = false
Vue.use(VueMaterial)
// TODO custiom themes
Vue.use(VueCarousel)
VuexRouterSync.sync(store, router)
Vue.use(VueBreadcrumbs);

// Load swagger client and SDK is created using tags and operationIds in the JSON
Swagger({url:process.env.BASE_URI,
requestInterceptor(req) {
  // req.headers['content-type'] = 'application/json'
  let u = store.getters['user/currentUser']
  if (u !== null) {
    req.headers['X-API-KEY'] = u.api_key
  }
  return req
}}).then((client) => {
  console.log(client)
  Vue.prototype.$ac = client
  let l = store.getters['settings/loc']
  const i18n = new VueI18n({
    locale: l, // set locale
    messages // set locale messages
  })
  store.dispatch('api/setClient', client)
  /* eslint-disable no-new */
  new Vue({
    i18n: i18n,
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
  })
});
