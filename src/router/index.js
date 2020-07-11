import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../page/home/home.vue'
import Address from '../page/address/address.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/address',
    name: 'Address',
    component: Address
  }
]

export default routes
