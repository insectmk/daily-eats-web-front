/**
 * 系统相关页面
 */
export const systemPages = [
  {
    path: 'system/role', // 角色管理
    component: () => import('@/views/system/RoleView.vue'),
  }, {
    path: 'system/menu', // 菜单管理
    component: () => import('@/views/system/MenuView.vue'),
  }, {
    path: 'system/user', // 用户管理
    component: () => import('@/views/system/UserView.vue'),
  },
]
