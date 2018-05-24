import Vue from 'vue'
import Router from 'vue-router'
import { Login, Project, Register, Oauthorize, Dashboard } from '@/components'

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
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter: isAuthenticated
    },
    {
      path: '/',
      name: 'home',
      redirect: {
        name: 'dashboard'
      }
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
