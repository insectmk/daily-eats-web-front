<script lang="ts">
export default {
  name: 'MainContent',
  computed: {
    count () {
      return 1 + 1
    }
  }
}
</script>

<template>
  <el-scrollbar><!--el美化滚动条-->
    <router-view />
  </el-scrollbar>
</template>

<style scoped lang="scss">

</style>
