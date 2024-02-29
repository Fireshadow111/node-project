<template>
    <section class="container mt-5">
      <div class="card ml-0 mt-5"  v-for="item in product" :key="item">
        <div class="card-body">
          <div class="row justify-content-center align-items-center text-center">
            <div class="col-md-6"><img :src="item.prod_URL" class="img-fluid">
              <!-- <img
                src="https://i.ibb.co/QNW9Hj1/634970c7cbeed5644711b937-62fd57ccd6890f25796f92f9-Adobe-Stock-295461823-removebg-preview.png"
                alt="Code-Image"
                loading="lazy"
                class="img-fluid"
              /> -->
            </div>
            <div class="col-md-6">
              <h2 class="text-uppercase card-title card-title mt-3">
               {{ item.prod_Name }}
              </h2>
              <h4 class="card-text">
              {{ item.category}}
              </h4>
           <!-- <router-link :to="{name: 'product', params: {id: product.prod_ID}}"><a class="btn">View Product</a></router-link> -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
    export default {
      data(){
        return{
          prod_Name: null,
          quantity:null,
          amount:null,
          category:null,
          prod_URL:null
        }
      },
    
      computed: {
        product(){
          return this.$store.state.product
        },
        getProduct(){
          return this.$store.dispatch('getProduct')
        },
    
        
      },
      mounted(){
        return this.getProduct

      },
      
    }
    </script>
  
  <style scoped>
  /* div.container-fluid {
    background-image: url("https://i.ibb.co/Qv7k393/cdfda49dd7071ec1623e87f55943ab3e.gif");
    background-size: cover;
  } */
  
  /* .center {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  } */
  
  .card {
    background: inherit;
    color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(255, 255, 255, 0.19);
    width: 75%;
  }
  
  .container{
    display: grid;
      align-content: center;
      justify-items: center;
  }
  
  p {
    text-align: justify;
  }
  /* .vh-100 {
    height: 50vh !important;
  } */
  
  .btn {
    border-color: #3a8541;
    color: #ffff;
  }
  
  /* .ml-0 {
    left: 29%;
  } */
  </style>
  