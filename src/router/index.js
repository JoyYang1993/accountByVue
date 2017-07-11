import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import index from '../views/index'
import login from '../views/login'
import register from '../views/register'
import record from '../views/record'
import recordShow from '../views/recordShow'

Vue.use(Router);
Vue.prototype.$ajax = axios;

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/record',
      name: 'record',
      component: record
    },
    {
      path: '/recordShow',
      name: 'recordShow',
      component: recordShow
    }
  ]
})
