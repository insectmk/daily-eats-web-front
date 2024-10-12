<template>
  <div id="de-app-container">
    <sidebar-component class="de-sidebar"/><!--侧边栏-->
    <div class="de-main-container">
      <navbar-component class="de-main-header"/><!--头部导航-->
      <main-component class="de-main"/><!--主要内容-->
    </div>
  </div>
</template>

<script setup lang="ts">
import MainComponent from '@/layout/components/MainComponent/index.vue'
import NavbarComponent from '@/layout/components/NavbarComponent/index.vue'
import SidebarComponent from '@/layout/components/SidebarComponent/index.vue'

defineOptions({
  name: 'SidebarComponent'
})
</script>
