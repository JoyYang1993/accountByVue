import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import index from '@/components/index'
import login from '@/components/login'
import register from '@/components/register'
import record from '@/components/record'
import recordShow from '@/components/recordShow'

Vue.use(Router)
Vue.prototype.$ajax = axios

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
