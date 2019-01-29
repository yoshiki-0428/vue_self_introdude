import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Story from '@/components/Story'
import Post from '@/components/Post'
import Contact from '@/components/Contact'
import NotFound from '@/components/NotFound'

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
    },
    {
      path: '/post',
      name: 'post',
      component: Post
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
