// store/index.js

import { createStore } from 'vuex';

export default createStore({
  state: {
    // 定义状态
    count: 1
  },
  mutations: {
    // 定义更改状态的函数
  },
  actions: {
    // 定义提交 mutation 的函数
  },
  modules: {
    // 定义子模块
  }
});
