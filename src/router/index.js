import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Oauthorize from '@/components/Oauthorize'

Vue.use(Router)

const isAuthenticated = (to, from, next) => {
  if (localStorage.getItem('user-token')) {
    return next()
  }
  console.log(to)
  return next('/login?redirect=' + to.fullPath)
}

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/oauth/authorize',
      name: 'Oauthorize', // heh
      component: Oauthorize,
      beforeEnter: isAuthenticated
    }
  ],
  mode: 'history'
})
