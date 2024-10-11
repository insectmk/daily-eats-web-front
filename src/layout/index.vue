<template>
  <div id="de-app-container">
    <sidebar-component class="de-sidebar"/><!--侧边栏-->
    <div class="de-main-content">
      <navbar-component class="de-navbar"/><!--头部导航-->
      <tags-view-component class="de-tags-view"/><!--页面标签-->
      <main-component class="de-main"/><!--主要内容-->
    </div>
  </div>
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
