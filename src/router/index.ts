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

// 路由守卫，文档：https://router.vuejs.org/zh/guide/advanced/navigation-guards.html
router.beforeEach((to, from) => {
  // 返回 false 以取消导航
  return true
})

export default router
