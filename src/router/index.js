import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Story from '@/components/Story'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/top',
      name: 'top',
      component: Top
    },
    {
      path: '/story',
      name: 'story',
      component: Story
    }
  ]
})
