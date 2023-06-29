<template>
  <div class="sidebar" :class="{ 'collapsed': isCollapsed }">
    <el-menu :default-active="activeMenuItem" class="menu" :collapse="isCollapsed">
      <!-- Contenido del sidebar -->
      <el-menu-item index="item1">
        <i class="el-icon-search"></i>
        <span v-show="!isCollapsed">Item 1</span>
      </el-menu-item>
      <el-menu-item index="item2">
        <i class="el-icon-edit"></i>
        <span v-show="!isCollapsed">Item 2</span>
      </el-menu-item>
      <el-menu-item index="item3">
        <i class="el-icon-share"></i>
        <span v-show="!isCollapsed">Item 3</span>
      </el-menu-item>
    </el-menu>
    <div class="collapse-button" @click="toggleCollapse">
      <i :class="isCollapsed ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left'"></i>
    </div>
  </div>
</template>


<script>
import SidebarJS from "./Sidebar";
import './Sidebar.css'
export default {
    ...SidebarJS
};
</script>


