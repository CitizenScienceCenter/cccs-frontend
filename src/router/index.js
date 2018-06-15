import Vue from 'vue';
import Router from 'vue-router';
import * as User from '@/views/user';
import * as Project from '@/views/project';
import * as Home from '@/views/home';
import * as Task from '@/views/task';
import * as Media from '@/views/media';
// import { Login, Create, Register, Oauthorize, Dashboard, Profile, View } from '@/components'

Vue.use(Router);

const logout = (to, from, next) => {
  localStorage.removeItem('user');
  return next('/login');
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
      meta: {requiresAuth: true},
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
      meta: {requiresAuth: true},
    },
    {
      path: '/projects',
      name: 'MyProjects',
      component: Project.MyProjects,
      meta: {requiresAuth: true},
    },
    {
      path: '/projects/create',
      name: 'CreateProject',
      component: Project.Create,
      meta: {requiresAuth: true},
    },
    {
      path: '/projects/:id',
      name: 'ViewProject',
      component: Project.View,
      meta: {requiresAuth: true},
    },
    {
      path: '/projects/:id/participate/:tid?',
      name: 'TakePart',
      component: Project.Participate,
      meta: {requiresAuth: true},
    },
    {
      path: '/users/:id',
      name: 'ViewUser',
      component: User.View,
      meta: {requiresAuth: true},
    },
    {
      path: '/user',
      name: 'ViewLoggedIn',
      component: User.View,
      meta: {requiresAuth: true},
    },
    {
      path: '/projects/:id/tasks',
      name: 'ViewTasks',
      component: Task.View,
      meta: {requiresAuth: true},
    },
    {
      path: '/projects/:id/tasks/:tid/media/add',
      name: 'UploadMediaTask',
      component: Media.Upload,
      meta: {requiresAuth: true},
    },
    {
      path: '/projects/:id/tasks/:tid',
      name: 'ViewTask',
      component: Task.ViewOne,
      meta: {requiresAuth: true},
    },
    {
      path: '/projects/:id/tasks/add',
      name: 'CreateTask',
      component: Task.Create,
      meta: {requiresAuth: true},
    },
  ],
  mode: 'history',
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('api_key')) {
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
