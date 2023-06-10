<template>
  <div id="app">
    <navbar></navbar>
    <router-view />
  </div>
</template>
<script>
import Navbar from './components/navbar/Navbar.vue';
import './styles/main.css'
export default {
  components: {
    Navbar,
  },
};
</script>
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
}

</style>
