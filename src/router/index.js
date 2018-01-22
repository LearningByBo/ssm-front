import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '../page/index.vue'
import User from '../page/User/user.vue'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
