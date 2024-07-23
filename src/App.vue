<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue'
import Sidebar from './components/sidebar.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <div class="">
    <Sidebar/>
    <Navbar/>


    <Footer/>

  
  

  <main>
   <RouterView/>
  </main>
  </div>
</template>

<style scoped>



</style>
