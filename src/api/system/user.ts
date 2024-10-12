import {getAction} from '@/api/http'

/**
 * 获取所有的用户信息
 */
export const getUsers = () =>  getAction('/user/getAll')
