import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main'
import Bio from '@/pages/bio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/bio',
      name: 'bio',
      component: Bio
    },
  ]
})
