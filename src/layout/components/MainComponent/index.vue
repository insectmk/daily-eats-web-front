<script lang="ts">
export default {
  name: 'MainContent',
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>

<template>
  <div>
    主要内容{{ count }}
  </div>
</template>

<style scoped lang="scss">

</style>
