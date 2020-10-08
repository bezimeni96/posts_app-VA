import Vue from 'vue'
import VueRouter from 'vue-router'
import AppPosts from '../components/AppPosts'
import SinglePost from '../components/SinglePost'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: AppPosts
  },
  {
    path: '/posts',
    name: 'posts',
    component: AppPosts
  },
  {
    path: '/posts/:id',
    name: 'single-post',
    component: SinglePost
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
