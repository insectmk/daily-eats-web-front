<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo de-sidebar-container"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
    :router="true"
    :default-active="router.currentRoute.value.path"
    :default-openeds="router.currentRoute.value.path"
    :collapse="isCollapse">
    <el-sub-menu v-for="menuLevel1 in menuTree"
                 :key="menuLevel1.id"
                 :index="menuLevel1.path"
                 :unique-opened="true">
      <template #title>
        <el-icon>
          <component :is="menuLevel1.icon"></component>
        </el-icon>
        <span>{{ menuLevel1.name }}</span>
      </template>
      <el-menu-item v-for="menuLevel2 in menuLevel1.children"
                    :key="menuLevel2.id"
                    :index="menuLevel2.path">{{ menuLevel2.name }}</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import store from '@/store'
import { computed, ref } from 'vue'
import { getUserMenuTree } from '@/api/system/menu'
import router from '@/router'

/*响应式数据*/
const isCollapse = computed(() => store.state.framework.sidebarIsCollapse) // 展开状态
const menuTree = ref(null)
// 获取用户菜单
getUserMenuTree().then((data) => {
  menuTree.value = data.data
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
