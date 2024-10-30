<template>
  <div>
    <el-icon class="expand-icon" :size="30" @click="changeSidebarIsCollapse" v-if="isCollapse">
      <Expand />
    </el-icon>
    <el-icon class="expand-icon" :size="30" @click="changeSidebarIsCollapse" v-else>
      <Fold />
    </el-icon>
    <el-breadcrumb separator="/"
                   style="display: inline-block; font-size: 16px; margin-left: 20px">
      <el-breadcrumb-item
        :to="{ path: '/' }">
        主页
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        {{ router.currentRoute.value.meta.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import store from '@/store'
import { computed } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'
import router from '@/router'

/*响应式数据*/
const isCollapse = computed(() => store.state.framework.sidebarIsCollapse) // 展开状态

// 更改侧边栏展开状态
const changeSidebarIsCollapse = () => {
  store.commit('framework/sidebarIsCollapse', !store.state.framework.sidebarIsCollapse)
}

defineOptions({
  name: 'NavbarComponent'
})
</script>

<style lang="scss" scoped>
/*菜单展开、收缩图标*/
.expand-icon {
  cursor: pointer;

  &:hover {
    background-color: #827f7f; // 焦点时变为红色
  }
}
</style>
