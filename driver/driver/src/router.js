import Vue from 'vue'
import Router from 'vue-router'
import Initial from './views/Initial.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'initial',
      component: Initial
    }
  ]
})

export default router
