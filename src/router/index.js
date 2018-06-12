import Vue from 'vue'
import Router from 'vue-router'
import * as User from '@/components/user'
import * as Project from '@/components/project'
import * as Home from '@/components/home'
import * as Task from '@/components/task'
import * as Media from '@/components/media'
// import { Login, Create, Register, Oauthorize, Dashboard, Profile, View } from '@/components'

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

module.exports = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: User.Login
    },
    {
      path: '/register',
      name: 'Register',
      component: User.Register
    },
    {
      path: '/logout',
      name: 'Logout',
      component: User.Login,
      beforeEnter: logout
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Home.Dashboard,
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
      component: User.Oauthorize,
      beforeEnter: isAuthenticated
    },
    {
      path: '/media/upload',
      name: 'UploadMedia',
      component: Media.Upload,
      beforeEnter: isAuthenticated
    },
    {
      path: '/projects/create',
      name: 'CreateProject',
      component: Project.Create,
      beforeEnter: isAuthenticated
    },
    {
      path: '/projects/:id',
      name: 'ViewProject',
      component: Project.View,
      beforeEnter: isAuthenticated
    },
    {
      path: '/users/:id',
      name: 'ViewUser',
      component: User.View,
      beforeEnter: isAuthenticated
    },
    {
      path: '/user',
      name: 'ViewUser',
      component: User.View,
      beforeEnter: isAuthenticated
    },
    {
      path: '/projects/:id/tasks',
      name: 'ViewTasks',
      component: Task.View,
      beforeEnter: isAuthenticated
    },
    {
      path: '/projects/:id/tasks/:tid/media/add',
      name: 'UploadMediaTask',
      component: Media.Upload,
      beforeEnter: isAuthenticated
    },
    {
      path: '/projects/:id/tasks/add',
      name: 'CreateTask',
      component: Task.Create,
      beforeEnter: isAuthenticated
    }
  ],
  mode: 'history'
})
