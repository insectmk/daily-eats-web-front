import { postAction } from '@/api/http'

/**
 * 登录
 * @param params 用户登录信息
 */
export const login = (params: object) =>  postAction('/system/login/action', params)
