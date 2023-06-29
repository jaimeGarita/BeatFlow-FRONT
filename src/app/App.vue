<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import Sidebar from '../components/sidebar/Sidebar.vue';
import './App.css'
import '../styles/main.css'
export default {
  components: {
    Sidebar,
  },
};
</script>

