<template>
  <div>
    <el-icon :size="30" @click="changeSidebarIsCollapse" v-if="isCollapse">
      <Expand />
    </el-icon>
    <el-icon :size="30" @click="changeSidebarIsCollapse" v-else>
      <Fold />
    </el-icon>
    <el-breadcrumb separator="/" style="display: inline-block">
      <el-breadcrumb-item
        :to="{ path: '/' }">
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
import store from '@/store'
import { computed } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'

const isCollapse = computed(() => store.state.framework.sidebarIsCollapse) // 展开状态

// 更改侧边栏展开状态
const changeSidebarIsCollapse = () => {
  store.commit('framework/sidebarIsCollapse', !store.state.framework.sidebarIsCollapse)
}

defineOptions({
  name: 'NavbarComponent'
})
</script>
