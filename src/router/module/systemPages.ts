/**
 * 系统相关页面
 */
export const systemPages = [
  {
    path: 'system/role', // 角色管理
    component: () => import('@/views/system/RoleView.vue'),
    meta: { title: '角色管理' },
  }, {
    path: 'system/menu', // 菜单管理
    component: () => import('@/views/system/MenuView.vue'),
    meta: { title: '菜单管理' }
  }, {
    path: 'system/user', // 用户管理
    component: () => import('@/views/system/UserView.vue'),
    meta: { title: '用户管理' }
  },
]
