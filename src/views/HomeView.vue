<template>
  <div class="home">
  <div class="row">
    <div class="col">
      <h1 class="text-capitalize m-4">come & make your “<span>next</span><span class="d-block">move”</span></h1>
      <h6 class="fs-2 text-capitalize m-4">With NM Technology, and get the <span class="d-inline-block">“BEST TECH SKILLS” </span>in the world. </h6>
      <a href="/products" class="text-light fs-6 text-decoration-none btn mt-3 m-4 ">View courses</a>
     </div>
    <div class="col-6">
     <img src="https://i.ibb.co/SrX2m0B/Frame-5.png" alt="world icon" loading="lazy" class="img-fluid mt-5">
    </div>
  
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

 h1,h6,a{
  /* margin-left:2.3rem; */
  font-weight: 650;
 }
 

 .btn{
  color: #ffff;
  width: 50%;
  padding: 15px 32px;
  background-color: #3A8541;
  cursor: pointer;
  opacity: 5;
 }
 .btn:hover{
  box-shadow: 0px 5px 20px 0px #3A8541, 0 10px 30px 0 #3A8541;
 }


</style>
