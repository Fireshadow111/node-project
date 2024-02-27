<template>
  <NavBar></NavBar>
  <main class="container-fluid
   vh-100">
     <router-view/>
  </main>
  <Footer></Footer>
   
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default{
  components:{
    NavBar,
  Footer

  }}
</script>

<style src="./assets/css/style.css"></style>