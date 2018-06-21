import Vue from 'vue'
import Router from 'vue-router'
import * as User from '@/views/user'
import * as Project from '@/views/project'
import * as Home from '@/views/home'
import * as Task from '@/views/task'
import * as Media from '@/views/media'
import store from '@/store'

Vue.use(Router);

const logout = (to, from, next) => {
  localStorage.removeItem('user')
  return store.dispatch('user/logout').then(() => next('/login'))

};

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
      path: '/dashboard',
      name: 'Dashboard',
      component: Home.Dashboard,
      meta: {requiresAuth: true, breadcrumb: 'Home'},
    },
    {
      path: '/',
      redirect: {
        name: 'Dashboard',
      },
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
          path: '/create',
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
          path: ':id/participate/:tid?',
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
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // console.log(store.getters['user/user'].api_key)
    // store.getters['user/user']
    // TODO check user after login is null, need to subscribe to value
    if (store.state.user.user !== null && 'api_key' in store.state.user.user && store.state.user.user.api_key) {
      next(vm => {
        console.log(vm)
        next()
      })
      // TODO check against user on server side (no access to $ac api object for call)
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath,
        },
      });
    }
  } else {
    next(); // make sure to always call next()!
  }
});

module.exports = router;
