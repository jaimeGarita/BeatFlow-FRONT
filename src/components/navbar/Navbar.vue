<template>
  <el-menu :default-active="$route.path"
           class="custom-menu"
           mode="horizontal"
           @select="handleSelect"
           :router="true">
    <el-menu-item index="/" route="/">Deploy Status</el-menu-item>
    <el-menu-item index="/projects" route="/projects">Projects</el-menu-item>
    <el-menu-item index="/services" route="/services">Services</el-menu-item>
  </el-menu>
</template>
  
  <script>
    export default {
      name: 'NavBar',
      methods: {
        handleSelect (key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
  </script>
  
<style>


.custom-menu .el-menu-item.is-active {
  border-color: #ff0000; /* Cambiar el color del borde cuando está seleccionado */
}

</style>