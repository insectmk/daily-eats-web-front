import axiosInstance from '@/api/axiosInstance'
import type { AxiosResponse } from 'axios'

/**
 * 发送get请求
 * @param url 请求接口
 * @param parameter 请求参数
 * @return Axios对象
 */
export const getAction = (url: string, parameter: object): Promise<object, AxiosResponse> => {
  return new Promise((resolve, reject) => {
    axiosInstance({
      url: url,
      method: 'get',
      params: parameter // 使用 params 而不是 data
    }).then((response: AxiosResponse) => {
      resolve(response.data, response) // 第一个参数是数据，第二个参数是完整的响应对象
    }).catch((error: any) => {
      reject(error); // 抛出错误，以便调用者可以捕获
    });
  });
}

/**
 * 发送post请求
 * @param url 请求接口
 * @param data 请求参数
 * @return Axios对象
 */
export const postAction = (url: string, data: object): Promise<object, AxiosResponse> => {
  return new Promise((resolve, reject) => {
    axiosInstance({
      url: url,
      method: 'post',
      data: data
    }).then((response: AxiosResponse) => {
      resolve(response.data, response) // 第一个参数是数据，第二个参数是完整的响应对象
    }).catch((error: any) => {
      reject(error) // 抛出错误，以便调用者可以捕获
    })
  })
}
