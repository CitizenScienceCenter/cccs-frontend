import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Oauthorize from '@/components/Oauthorize'

Vue.use(Router)

const isAuthenticated = (to, from, next) => {
  if (localStorage.getItem('user')) {
    return next()
  }
  console.log(to)
  return next('/login?redirect_url=' + to.fullPath)
}

const logout = (to, from, next) => {
  localStorage.removeItem('user')
  return next('/login')
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
      path: '/logout',
      name: 'Logout',
      component: Login,
      beforeEnter: logout
    },
    {
      path: '/',
      name: 'Home',
      component: Login, // TODO create home view?
      beforeEnter: isAuthenticated
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
