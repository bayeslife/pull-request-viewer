import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PullRequests from '@/components/PullRequests'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PullRequest',
      component: PullRequests
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
