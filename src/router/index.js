import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'ozi',
    component: () => import('../views/ozi.vue')
  },
  {
    path: '/catalog__department',
    name: 'catalogDepartment',
    component: () => import('../views/catalog/catalog__department.vue')
  },
  {
    path: '/person',
    name: 'person',
    component: () => import('../views/person/person.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
