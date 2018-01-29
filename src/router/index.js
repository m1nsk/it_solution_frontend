import Vue from 'vue'
import Router from 'vue-router'
import MessagesOutOfSpace from '@/components/MessagesOutOfSpace'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MessagesOutOfSpace',
      component: MessagesOutOfSpace
    }
  ]
})
