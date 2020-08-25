import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../components/Login')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../components/Home'),
      children: [
        {
          path: 'activity',
          name: 'activity',
          component: () => import('../components/activity')
        },
        {
          path: '/apply',
          name: 'apply',
          component: () => import('../components/apply')
        }
      ]
    }

  ]
})
