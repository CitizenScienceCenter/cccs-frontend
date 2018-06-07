import Vue from 'vue'
import Dashboard from '@/components/home'

describe('Dashboard.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.featured-title').textContent)
      .to.equal('Featured Projects')
  })
})
