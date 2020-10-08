import Vue from 'vue'
import VueRouter from 'vue-router'
import AppPosts from '../components/AppPosts'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
