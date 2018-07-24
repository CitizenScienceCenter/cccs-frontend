import Vue from 'vue'
import Router from 'vue-router'
import * as User from '@/views/user'
import * as Project from '@/views/project'
import * as Home from '@/views/home'
import * as Task from '@/views/task'
import * as Media from '@/views/media'
import store from '@/store'

Vue.use(Router)

const logout = (to, from, next) => {
  localStorage.removeItem('user')
  return store.dispatch('user/logout').then(() => next('/login'))
}

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: User.Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: User.Register,
    },
    {
      path: '/logout',
      name: 'Logout',
      component: User.Login,
      beforeEnter: logout,
    },
    {
      path: '/splash',
      name: 'Splash',
      component: Home.Splash
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Home.Dashboard,
      meta: {requiresAuth: true, breadcrumb: 'Home'},
    },
    {
      path: '/',
      beforeEnter: (to, from, next) => {
        if (store.state.user.currentUser !== null && 'api_key' in store.state.user.currentUser && store.state.user.currentUser.api_key) {
          next({
            path: '/dashboard',
          });
        } else {
          next({
            path: '/splash',
          });
        }
      }
    },
    {
      path: '/oauth/authorize',
      name: 'Oauthorize', // heh
      component: User.Oauthorize,
      meta: {requiresAuth: true},
    },
    {
      path: '/media/upload',
      name: 'UploadMedia',
      component: Media.Upload,
      meta: {requiresAuth: true, breadcrumb: 'Upload Media'},
    },
    {
      path: '/projects',
      component: Project.Root,
      meta: {requiresAuth: true, breadcrumb: 'Projects'},
      children: [
        {
          path: '',
          name: 'MyProjects',
          component: Project.MyProjects,
          meta: {requiresAuth: true, breadcrumb: 'My Projects'},
        },
        {
          path: 'create',
          name: 'CreateProject',
          component: Project.Create,
          meta: {requiresAuth: true, breadcrumb: 'Create Project'},
        },
        {
          path: ':id',
          name: 'ViewProject',
          component: Project.View,
          meta: {requiresAuth: true, breadcrumb: 'View Project'},
        },
        {
          path: ':id/participate/:tid',
          name: 'Submission',
          component: Project.Participate,
          meta: {requiresAuth: true, breadcrumb: 'Take Part'},
        },
        {
          path: ':id/participate',
          name: 'TakePart',
          component: Project.Participate,
          meta: {requiresAuth: true, breadcrumb: 'Take Part'},
        },
        {
          path: ':id/tasks',
          name: 'ViewTasks',
          component: Task.View,
          meta: {requiresAuth: true, breadcrumb: 'View Tasks'},
        },
        {
          path: ':id/tasks/:tid/media/add',
          name: 'UploadMediaTask',
          component: Media.Upload,
          meta: {requiresAuth: true, breadcrumb: 'Upload Media'},
        },
        {
          path: ':id/tasks/add',
          name: 'CreateTask',
          component: Task.Create,
          meta: {requiresAuth: true, breadcrumb: 'Create Task'},
        },
        {
          path: ':id/tasks/:tid',
          name: 'ViewTask',
          component: Task.ViewOne,
          meta: {requiresAuth: true, breadcrumb: 'View Task'},
        },
      ]
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Home.Settings,
      meta: {requiresAuth: true, breadcrumb: 'Change Settings'},
    },
    {
      path: '/users/:id',
      name: 'ViewUser',
      component: User.View,
      meta: {requiresAuth: true, breadcrumb: 'View User'},
    },
    {
      path: '/user',
      name: 'ViewLoggedIn',
      component: User.View,
      meta: {requiresAuth: true, breadcrumb: 'View User'},
    }
    
  ],
  mode: 'history',
})

router.beforeEach((to, from, next) => {
  // TODO call needed every time? could check on first call and then add to store?
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('user/validate').then(v => {
      if (v) {
        next()
      } else {
        next({
          path: '/login',
          query: {
            redirect: to.fullPath
          }
        })
      }
    })
  } else {
    next()
  }
})

module.exports = router

