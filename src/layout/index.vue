<template>
  <el-container>
    <el-aside width="200px"><!--侧边栏-->
      <sidebar-component/>
    </el-aside>
    <el-container>
      <el-header><!--头部-->
        <navbar-component/>
        <tags-view-component/>
      </el-header>
      <el-main><!--主要内容-->
        <main-component/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import MainComponent from '@/layout/components/MainComponent/index.vue'
import NavbarComponent from '@/layout/components/NavbarComponent/index.vue'
import SidebarComponent from '@/layout/components/SidebarComponent/index.vue'
import TagsViewComponent from '@/layout/components/TagsViewComponent/index.vue'

export default {
  name: 'LayoutPage',
  components: {
    MainComponent,
    NavbarComponent,
    SidebarComponent,
    TagsViewComponent,
  },
}
</script>

<style lang="scss" scoped>

</style>
