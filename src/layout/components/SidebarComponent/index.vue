<template>
  <div style="min-height: 100vh;max-height: 100vh;background-color: #545c64;">
    <el-scrollbar>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo de-sidebar-container"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
        :router="true"
        :default-active="router.currentRoute.value.path"
        :default-openeds="[router.currentRoute.value.path]"
        :collapse="isCollapse">
        <!-- 循环菜单 -->
        <sidebar-item
          v-for="menuLevel1 in menuTree"
          :key="menuLevel1.id"
          :item="menuLevel1" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import store from '@/store'
import { computed } from 'vue'
import { getUserMenuTree } from '@/api/system/menu'
import router from '@/router'
import SidebarItem from '@/layout/components/SidebarComponent/SidebarItem.vue'

/*响应式数据*/
const isCollapse = computed(() => store.state.framework.sidebarIsCollapse) // 展开状态
const menuTree = computed(() => store.state.menu.userMenuTree) // 用户树形菜单
// 获取用户菜单
getUserMenuTree().then((data) => {
  // 更新用户菜单
  store.commit('menu/userMenuTree', data.data)
})
/*函数*/
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
/*抛出的数据*/
defineOptions({
  name: 'SidebarComponent'
})
</script>
