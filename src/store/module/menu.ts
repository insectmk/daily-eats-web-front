// 定义状态
const state = {
  userMenuTree: {}, // 用户树形菜单对象
}
// 定义获取状态的方法
const getters = {

}
// 定义更改状态的函数
const mutations = {
  /**
   * 修改侧边栏菜单收缩状态
   * @param state
   * @param userMenuTree 用户菜单树对象
   */
  userMenuTree(state, userMenuTree: object) {
    state.userMenuTree = userMenuTree
  }
}
// 定义提交 mutation 的函数
const actions = {

}
// 暴露出去
export default {
  namespaced: true, // 命名空间
  state,
  getters,
  mutations,
  actions
}
