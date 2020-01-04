import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import BlogList from '@/components/blog-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/blogs',
      name: 'BlogList',
      component: BlogList
    }
  ]
})
