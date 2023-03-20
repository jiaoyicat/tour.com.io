import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home/Home.vue'
import City from '@/components/city/Ctiy.vue'
import Detail from '@/components/detail/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Ctiy',
    name: 'City',
    component: City
  },
  {
    path: '/Detail',
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes
})

export default router
