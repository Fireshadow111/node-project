<template>
    <footer class="bg-white text-center text-lg-start text-black">
      <!-- Copyright -->
      <div class="text-center" style="background-color:# #12100E">
        <p class="lead">NEXT MOVE TECHNOLOGY  &copy;<span>{{ currYear }}</span></p>
      </div>
      <!-- Copyright -->
    </footer>
    <!-- End of .container -->
    </template>
    
    <script>
        export default {
            name:'FooterComp',
         data(){
            return {
                currYear:new Date().getFullYear( )
            }
         }    
        }
    </script>
    
    <style scoped>
  p{
    margin-bottom: 0;
  }
    </style>