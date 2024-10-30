<template>
  <template v-if="!item.children || item.children.length === 0">
    <el-menu-item :index="item.path">
      <el-icon>
        <component :is="item.icon"></component>
      </el-icon>
      <template #title>
        {{ item.name }}
      </template>
    </el-menu-item>
  </template>

  <el-sub-menu
    v-else
    :index="item.path"
    :unique-opened="true">
    <template #title>
      <el-icon>
        <component :is="item.icon"></component>
      </el-icon>
      <span>{{ item.name }}</span>
    </template>
    <sidebar-item
      v-for="child in item.children"
      :key="child.id"
      :item="child"
    />
  </el-sub-menu>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
}
</script>
