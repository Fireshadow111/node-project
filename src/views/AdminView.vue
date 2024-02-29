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
  
      <table class="table mt-5">
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
      



      <input type="text" placeholder="first_Name" v-model="first_Name" required>
    <input type="text"  placeholder="last_Name" v-model="last_Name" required>
    <input type="number" placeholder="user_Age" v-model="user_Age" required>
    <input type="text" placeholder="gender" v-model="gender" required>
    <input type="text" placeholder="user_Role" v-model="user_Role" required>
    <input type="text" placeholder="email_Add" v-model="email_Add" required>
    <input type="text" placeholder="user_Pass" v-model="user_Pass" required>
    <input type="text" placeholder="user_Profile" v-model="user_Profile" required>
    <button @click="addUser()">Add Button</button>
    <h1></h1>
    <table class="table">
      <tr class="thead">
        <th>id</th>
        <th>name</th>
        <th>surname</th>
        <th>age</th>
        <th>gender</th>
        <th>role</th>
        <th>email</th>
        <th>pass</th>
        <th>profile</th>
      </tr>
      <tbody v-for="item in users" :key="item.id" >
        <td>{{item.first_Name}}</td>
        <td>{{item.last_Name}}</td>
        <td>{{item.user_Age}}</td>
        <td>{{item.gender}}</td>
        <td>{{item.user_Role}}</td>
        <td>{{item.email_Add}}</td>
        <td>{{item.user_Pass}}</td>
        <td>{{item.user_Profile}}</td>
        <button @click="editUser(item.user_ID)">Edit</button>
        <button @click="deleteUser(item.user_ID)">Delete</button>
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
        prod_URL:null,

        first_Name:null,
      last_Name:null,
      user_Age:null,
      gender:null,
      user_Role:null,
      email_Add:null,
      user_Pass:null,
      user_Profile:null
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
      },

      addUser(){
      this.$store.dispatch('addUser',this.$data)
    },
    deleteUser(user_ID) {
      this.$store.dispatch('deleteUser',user_ID)
    },
    editUser(user_ID){
      let edit = {
      id:user_ID,
      first_Name: this.first_Name,
      last_Name: this.last_Name,
      user_Age: this.user_Age,
      gender: this.gender,
      user_Role: this.user_Role,
      email_Add:this.email_Add,
      user_Pass:this.user_Pass,
      user_Profile: this.user_Profile
      }
      this.$store.dispatch('editUser',edit)

    }
    },
  
    computed: {
      products(){
        return this.$store.state.products
      },
      getProducts(){
        return this.$store.dispatch('getProducts')
      },
      users(){
      return this.$store.state.users
    },
    getUsers(){
     return this.$store.dispatch('getUsers')
    },
  
      
    },
    mounted(){
      this.getProducts
      this.getUsers
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