import { getAction } from '@/api/http'

/**
 * 获取登录用户的菜单
 */
export const getUserMenuTree = () =>  getAction('/menu/getUserMenuTree')
