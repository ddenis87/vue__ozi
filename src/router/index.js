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
    path: '/catalog__district',
    name: 'catalogDistrict',
    component: () => import('../views/catalog/catalog__district.vue')
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
    path: '/catalog__security-admin',
    name: 'catalogSecurityAdmin',
    component: () => import('../views/catalog/catalog__security-admin.vue')
  },
  {
    path: '/person',
    name: 'person',
    component: () => import('../views/person/person.vue')
  },
  {
    path: '/person-card',
    name: 'person-card',
    component: () => import('../views/person/person-card.vue'),
    children: [
      {
        path: '/person-card/__document',
        component: () => import('../views/person/person-card/__document')
      },
      {
        path: '/person-card/__crypto',
        component: () => import('../views/person/person-card/__crypto')
      },
    ]
  },
  {
    path: '/report-week',
    name: 'report-week',
    component: () => import('../views/report/report-week.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
