import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent
    }
  ]
})
