import { createStore } from 'vuex'
import framework from '@/store/module/framework'

/**
 * 参考文档 https://vuex.vuejs.org/zh/
 */
export default createStore({
  modules: {
    // 定义子模块
    framework, // 项目/框架相关
  }
})
