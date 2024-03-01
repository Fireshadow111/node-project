<template>
    <section class="container mt-5">
      <Card class="card ml-0 mt-5"  v-for="item in product" :key="item.prod_ID">
        <div class="card-body">
          <div class="row justify-content-center align-items-center text-center">
            <div class="md-6"><img :src="item.prod_URL" class="img-fluid w-50 mt-5">
              <!-- <img
                src="https://i.ibb.co/QNW9Hj1/634970c7cbeed5644711b937-62fd57ccd6890f25796f92f9-Adobe-Stock-295461823-removebg-preview.png"
                alt="Code-Image"
                loading="lazy"
                class="img-fluid"
              /> -->
            </div>
            <div class="md-6 ">
              <h2 class="text-uppercase card-title card-title mt-5">
               {{ item.prod_Name }}
              </h2>
              <h4 class="card-text">
              {{ item.category}}
              </h4>
              <h5>{{ item.amount }}</h5>
              <router-link :to="{name: 'products', params: {id:item.prod_ID}}"><a class="btn">Go back to Products</a></router-link>
              <a class="btn " @click="purchaseClicked">Purchase</a>
            </div>
          </div>
        </div>
      </Card>

    </section>
  </template>
  
  <script>
  import Card from '@/components/Card.vue'
    export default {
      components: {
      Card
    },
      data(){
        return{
          prod_Name: null,
          quantity:null,
          amount:null,
          category:null,
          prod_URL:null
        }
      },

      methods: {
    purchaseClicked() {
 
      alert('Thank you for your purchase!'); 
    },
  },
    
      computed: {
        product(){
          return this.$store.state.product
        },
        getProduct(){
            console.log(this.$route.params.id);
          return this.$store.dispatch('getProduct', this.$route.params.id)
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
    width: 55%;

    transition: transform 0.3s;
  }
  
  .card:hover{
  transform:scale(105%)
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

  .btn:hover{
  border-color: white;
  color:#3a8541;
}
  
  /* .ml-0 {
    left: 29%;
  } */
  </style>
  