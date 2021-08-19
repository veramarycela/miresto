import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/tareas-clc',
    name: 'tareas-clc',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tareas-clc.vue')
  },
  {
    path: '/tareas-clp',
    name: 'tareas-clp',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tareas-clp.vue')
  },
  {
    path: '/tareas-clt',
    name: 'tareas-clt',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tareas-clt.vue')
  },
  {
    path: '/cargar-c',
    name: 'cargar-c',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cargar-c.vue')
  },
  {
    path: '/cargar-p',
    name: 'cargar-p',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cargar-p.vue')
  },
  {
    path: '/cargar-t',
    name: 'cargar-t',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cargar-t.vue')
  },
  {
    path: '/consul-o',
    name: 'consul-o',
    component: () => import(/* webpackChunkName: "about" */ '../views/Consul-o.vue')
  },
  
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
