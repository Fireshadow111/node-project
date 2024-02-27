<template>
  <div class="home">
  <div class="row">
    <div class="col">
      <!-- <h1 class="text-capitalize ">come & make your “<span>next</span><span class="d-block">move”</span></h1> -->
      <h6 class="fs-2 text-capitalize">With NM Technology, and get the <span class="d-inline-block">“BEST TECH SKILLS” </span>in the world. </h6>
    </div>
    <div class="col-6">
     <img src="https://i.ibb.co/SrX2m0B/Frame-5.png" alt="world icon" loading="lazy" class="img-fluid mt-5">
    </div>
    <button type="button" class=" btn mt-3 "><a href="/src/views/ProductsView.vue" class="text-light fs-6 text-decoration-none">View courses/services</a></button>
  </div>
  </div>
</template>

<script>


export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>

<style scoped>
 h1{
  font-size: 100px;
  color:#3A8541 ;
  margin-top: 5rem;
 }

 span{
  color: #ffff;
  text-transform: uppercase;
 }
 h1,h6{
  margin-left:2.3rem;
  font-weight: 650;
 }
 
 button{
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin-left:3.3rem;
  cursor: pointer;
  border: 3px solid #3A8541;
  padding: 15px 32px;
  background-color: #3A8541 ;
  width: 300px;
  border-radius: 8px;
  opacity: 5;
  box-shadow: 0 5px 20px 0 #ffff, 0 15px 50px 0;
 }

 button:hover{
  box-shadow: 0 5px 20px 0 greenyellow, 0 17px 30px 0 #3A8541;
 }


</style>
