<template>
  <div class="container-fluid mt-5">
    <h1 class="display-3 text-center fst-italic fw-bold">
      The courses we offer:
    </h1>
  </div>
  <div class="row mt-5 m-4">
    <div class="col mb-3 d-flex justify-content: space-between ">
          <input type="text" placeholder="search a product" required class="form-control w-25" data-search-product>
          <button class="btn btn-success text-black " data-sort-product>SORT BY PRICE</button>
        </div>

      </div>
  
  <section class="container mt-5">
    <Card  v-for="item in products" :key="item">      
      <div class="card-body">
        <div class="row justify-content-center align-items-center text-center">
          <div class="col-md-6"><img :src="item.prod_URL" class="img-fluid">
          </div>
          <div class="col-md-6">
            <h2 class="text-uppercase card-title card-title mt-3">
             {{ item.prod_Name }}
            </h2>
            <h4 class="card-text">
            {{ item.category}}
            </h4>
            <router-link :to="{name: 'productview', params: {id:item.prod_ID}}"><a class="btn">View Product</a></router-link>
          </div>
        </div>
      </div>
    </Card>
    <!-- <div class="card ml-0 mt-5"  v-for="item in products" :key="item">
    </div> -->
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
  
    methods:{
     
    },
    computed: {
      products(){
        return this.$store.state.products
      },
      getProducts(){
        return this.$store.dispatch('getProducts')
      },
  
      
    },
    mounted(){
      this.getProducts
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

.d-flex{
  justify-content: space-between
}
</style>
