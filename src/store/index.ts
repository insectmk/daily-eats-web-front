import { createStore } from 'vuex'
import framework from '@/store/module/framework'
import menu from '@/store/module/menu'

/**
 * 参考文档 https://vuex.vuejs.org/zh/
 */
export default createStore({
  modules: {
    // 定义子模块
    framework, // 项目/框架相关
    menu, // 菜单相关
  }
})
