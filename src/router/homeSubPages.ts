import { userPages } from '@/router/module/userPages'
import { systemPages } from '@/router/module/systemPages'

// 主页面的内容页
export const homeSubPages = [
  { // 主页面
    path: '',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  ...userPages, // 用户相关页面
  ...systemPages, // 系统相关页面
]
