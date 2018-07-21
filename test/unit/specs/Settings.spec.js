import Vue from 'vue'
import { Settings } from '@/views/home'
import store from '@/store'
import VueCarousel from 'vue-carousel'
import VueMaterial from 'vue-material'
import * as loc from '@/localisation/index'
import vuexI18n from 'vuex-i18n'

Vue.use(vuexI18n.plugin, store)
Vue.use(VueMaterial)
Vue.use(VueCarousel)
Vue.i18n.add('en', loc.en)
Vue.i18n.set('en')

describe('Settings', () => {

  it('should render correct contents', () => {
    const Constructor = Vue.extend(Settings)
    const vm = new Constructor({store}).$mount()
    expect(vm.$el.querySelector('.md-title').textContent)
      .to.equal('Settings')
  })
})
