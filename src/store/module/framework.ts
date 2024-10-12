// 定义状态
const state = {
  sidebarIsCollapse: false, // 侧边栏菜单收缩状态
}
// 定义获取状态的方法
const getters = {

}
// 定义更改状态的函数
const mutations = {
  /**
   * 修改侧边栏菜单收缩状态
   * @param state
   * @param flag true：收缩，false：展开
   */
  sidebarIsCollapse(state, flag: boolean) {
    state.sidebarIsCollapse = flag
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
