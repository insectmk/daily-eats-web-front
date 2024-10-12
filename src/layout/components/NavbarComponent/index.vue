<template>
  <div>
    <el-icon :size="20" @click="changeSidebarIsCollapse">
      <Operation />
    </el-icon>
    <el-breadcrumb separator="/" style="display: inline-block">
      <el-breadcrumb-item
        :to="{ path: './page-header.html' }">
        主页
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="./page-header.html">一级菜单</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        二级菜单
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import { Operation } from '@element-plus/icons-vue'
import store from '@/store'

// 更改侧边栏展开状态
const changeSidebarIsCollapse = () => {
  store.commit('framework/sidebarIsCollapse', !store.state.framework.sidebarIsCollapse)
}

defineOptions({
  name: 'NavbarComponent'
})
</script>
