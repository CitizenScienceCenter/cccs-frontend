import Vue from 'vue'
import Router from 'vue-router'
import { Login, Create, Register, Oauthorize, Dashboard, Profile } from '@/components'

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
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: isAuthenticated
    },
    {
      path: '/',
      redirect: {
        name: 'Dashboard'
      }
    },
    {
      path: '/oauth/authorize',
      name: 'Oauthorize', // heh
      component: Oauthorize,
      beforeEnter: isAuthenticated
    },
    {
      path: '/projects/create',
      name: 'CreateProject',
      component: Create,
      beforeEnter: isAuthenticated
    },
    {
      path: '/users/profile',
      name: 'UserProfile',
      component: Profile,
      beforeEnter: isAuthenticated
    },
  ],
  mode: 'history'
})
