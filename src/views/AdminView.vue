/* eslint-disable */
<template>
      <div>
       <!-- Button trigger modal -->
       
  <button type="button" class="btn btn-primary mt-5" id="add" data-bs-toggle="modal" data-bs-target="#addNewProduct">
    Add Product
  </button>

  <!-- Modal -->
  <div class="modal fade" id="addNewProduct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <input type="text" placeholder="prod_Name" class="form-control my-2" v-model="prod_Name" required>
          <input type="number" placeholder="quantity" class="form-control my-2" v-model="quantity" required>
          <input type="number"  placeholder="amount" class="form-control my-2" v-model="amount" required>
          <input type="text" placeholder="category" class="form-control my-2" v-model="category" required>
          <input type="text" placeholder="prod_URL" class="form-control my-2" v-model="prod_URL" required>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
          <a @click="addProduct()" class="btn btn-success">Add</a>
        </div>
      </div>
    </div>
  </div>
  
      <table class="table">
        <tr class="thead">
          <th>id</th>
          <th>prod_name</th>
          <!-- <th>quantity</th> -->
          <th>amount</th>
          <th>category</th>
          <th>ProdURL</th>
          <th>Action</th>
        </tr>
        <tbody v-for="item in products" :key="item.id" class="mt-3">
          <td>{{item.prod_ID}}</td>
          <td>{{item.prod_Name}}</td>
          <!-- <td>{{item.quantity}}</td> -->
          <td>{{item.amount}}</td>
          <td>{{item.category}}</td>
          <td><img :src="item.prod_URL"></td>
          <td><a @click="editProd(item.prod_ID)" id="edit" class="btn btn-outline-success">Edit</a>
          <a @click="deleteProd(item.prod_ID)" id="delete" class="btn btn-outline-danger">Delete</a></td>
          
        </tbody>
      </table>
      
    </div>
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
    methods: {
      addProduct(){
        this.$store.dispatch('addProduct',this.$data)
      },
  
      deleteProd(prod_ID) {
        this.$store.dispatch('deleteProd',prod_ID)
      },
      editProd(prod_ID){
        let edit = {
          id:prod_ID,
          prod_Name: this.prod_Name,
          quantity: this.quantity,
          amount:this.amount,
          category:this.category,
          prod_URL:this.prod_URL
        }
        this.$store.dispatch('editProd',edit)
      }
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
  <style>
  .table {
    width: 96%;
    border-collapse: collapse;
    margin-top: 20px;
    align-content: center;
    margin: 2.3rem;
    
  }
  
  .table th, .table td {
    border: 1px solid #ddd;
    padding: 1px;
    text-align: left;
  }
  
  .thead {
    background-color:inherit;
    color: white;
  }
  
  .table img {
    max-width:400px;
    max-height: 50px;
    border-radius: 5px;
    background-color: inherit;
  }
  
  #edit, #delete {
    color: white;
   background-color: inherit;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    margin: 2px;
    cursor: pointer;
    border-radius: 3px;
    margin-top: 10px;
  }
  
  .table #edit:hover {
    background-color: #39983d;
  }
  .table #delete:hover {
    background-color: #dc5957;
  }
  
  #add{
    margin-left: 2.5rem;
    display: grid;
  }
    
  </style>