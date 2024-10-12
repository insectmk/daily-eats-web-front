import { createRouter, createWebHistory } from 'vue-router'
import { homeSubPages } from '@/router/homeSubPages'

// 文档 https://router.vuejs.org/zh/
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      //component: () => import('../views/HomeView.vue')
      component: () => import('../layout/index.vue'),
      children: homeSubPages
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
  ]
})

export default router
