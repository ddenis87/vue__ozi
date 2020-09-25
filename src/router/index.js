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
    path: '/catalog__post',
    name: 'catalogPost',
    component: () => import('../views/catalog/catalog__post.vue')
  },
  {
    path: '/catalog__document-input',
    name: 'catalogDocumentInput',
    component: () => import('../views/catalog/catalog__document-input.vue')
  },
  {
    path: '/catalog__document-output',
    name: 'catalogDocumentOutput',
    component: () => import('../views/catalog/catalog__document-output.vue')
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
