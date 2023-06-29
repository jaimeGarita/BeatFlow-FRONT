<template>
  <div>
    <Sidebar></Sidebar>
    <div class="main-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Sidebar from '/src/components/sidebar/Sidebar.vue';
import './Layout.css'
export default {
  components: {
    Sidebar,
  },
};
</script>