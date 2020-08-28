import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

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
        },
        {
          path: '/top',
          name: 'top',
          component: () => import('../components/top')
        },
        {
          path: '/vip',
          name: 'vip',
          component: () => import('../components/vip')
        },
        {
          path: '/success',
          name: 'success',
          component: () => import('../components/success')
        },
        {
          path: '/paste',
          name: 'paste',
          component: () => import('../components/paste')
        },
        {
          path: '/comment',
          name: 'comment',
          component: () => import('../components/comment')
        },
        {
          path: '/basic_message',
          name: 'basic_message',
          component: () => import('../components/basic_message')
        },
        {
          path: '/dispose',
          name: 'dispose',
          component: () => import('../components/dispose')
        },
        {
          path: '/life_message',
          name: 'life_message',
          component: () => import('../components/life_message')
        },
        {
          path: '/combo',
          name: 'combo',
          component: () => import('../components/combo')
        },
        {
          path: '/class_text',
          name: 'class_text',
          component: () => import('../components/class_text')
        },
        {
          path: '/choose_mate',
          name: 'choose_mate',
          component: () => import('../components/choose_mate')
        },
        {
          path: '/attention',
          name: 'attention',
          component: () => import('../components/attention')
        },
        {
          path: '/emp',
          name: 'emp',
          component: () => import('../components/emp')
        },
        {
          path: '/pay_fees',
          name: 'pay_fees',
          component: () => import('../components/pay_fees')
        },
        {
          path: '/profession_type',
          name: 'profession_type',
          component: () => import('../components/profession_type')
        },
        {
          path: '/details_message',
          name: 'details_message',
          component: () => import('../components/details_message')
        },
        {
          path: '/class_vido',
          name: 'class_vido',
          component: () => import('../components/class_vido')
        },
        {
          path: '/media',
          name: 'media',
          component: () => import('../components/media')
        },
        {
          path: '/photo',
          name: 'photo',
          component: () => import('../components/photo')
        },
        {
          path: '/JYpeople',
          name: 'JYpeople',
          component: () => import('../components/JYpeople')
        }
      ]
    }

  ]
})
