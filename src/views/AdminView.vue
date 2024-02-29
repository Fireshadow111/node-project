/* eslint-disable */
<template>
    <div>
        
      <input type="text" placeholder="prod_Name" v-model="prod_Name" required>
      <input type="number" placeholder="quantity" v-model="quantity" required>
      <input type="number"  placeholder="amount" v-model="amount" required>
      <input type="text" placeholder="category" v-model="category" required>
      <input type="text" placeholder="prod_URL" v-model="prod_URL" required>
      <button @click="addProduct()">Add Button</button>
  
      <h1></h1>
  
      <table class="table">
        <tr class="thead">
          <th>id</th>
          <th>prod_name</th>
          <th>quantity</th>
          <th>amount</th>
          <th>category</th>
          <th>ProdURL</th>
        </tr>
        <tbody v-for="item in products" :key="item.id" >
          <td>{{item.prod_ID}}</td>
          <td>{{item.prod_Name}}</td>
          <td>{{item.quantity}}</td>
          <td>{{item.amount}}</td>
          <td>{{item.category}}</td>
          <td><img :src="item.prod_URL"></td>
          <button @click="editProd(item.prod_ID)">Edit</button>
          <button @click="deleteProd(item.prod_ID)">Delete</button>
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
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  .table th, .table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  .thead {
    background-color: #3498db;
    color: white;
  }
  
  .table img {
    max-width: 50px;
    max-height: 50px;
    border-radius: 5px;
  }
  
  .table button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    margin: 2px;
    cursor: pointer;
    border-radius: 3px;
  }
  
  .table button:hover {
    background-color: #45a049;
  }
  
    
  </style>