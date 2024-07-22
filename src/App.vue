<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue'
import Sidebar from './components/sidebar.vue'

</script>

<template>
  <div class="">
    <Sidebar/>
    <Navbar/>

  
  

  <main>
   <RouterView/>
  </main>
  </div>
</template>

<style scoped>



</style>
