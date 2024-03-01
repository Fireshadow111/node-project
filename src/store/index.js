import { createStore } from 'vuex'
import axios from 'axios'
// import sweet from 'sweetalert'

const baseUrl = 'https://node-project-1-3d99.onrender.com'
/* eslint-disable */
export default createStore({
  state: {
    products: null,
    users: null,
    loggedIn: false,
    product:null
  },
  getters: {},
  mutations: {
    setProducts(state, data) {
      state.products = data;
    },
    setProduct(state, data) {
      state.product = data;
    },
    
    setUser(state, data) {
      state.users = data;
    },
    setLogged(state,data){
      state.loggedIn = data
    }
   
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const {data} = await axios.get(baseUrl+'/products');
        commit("setProducts", data);
        
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },

    async getProduct({commit},prod_ID){
      try{const {data} = await axios.get(baseUrl+'/products/'+prod_ID)
      commit("setProduct", data);
    }catch(error){
      console.error('Error fetching product:', error);
    }
      
    },

    async addProduct({commit},add) {
      try {
         const {data} = await axios.post(baseUrl+'/products',add)
     commit("setProducts", data);
     window.location.reload();
      } catch (error) {
        console.error('Error adding product:', error);
      }
    
     
    },

    async deleteProd({commit},prod_ID){
      try {
        await axios.delete(baseUrl+'/products/'+prod_ID)
      window.location.reload();
      } catch (error) {
        console.error('Error deleting product:', error);
      }
       
    },

    async editProd({commit},update){
      try {
         await axios.patch(baseUrl+'/products/'+update.id,update)
      window.location.reload();
      } catch (error) {
        console.error('Erro editing product:', error);
      }
     
    },



    async getUsers({ commit }) {
      try {
        const {data} = await axios.get(baseUrl+'/users');
        commit("setUser", data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    async getUser({commit}){
      try {
        await axios.get(baseUrl+'/users')
      } catch (error) {
        console.error('Error getting user:', error);
      }
      
    },
    async addUser({commit},add) {
      try {
         const {data} = await axios.post(baseUrl+'/users',add)
     commit("setUser", data);
     window.location.reload();
      } catch (error) {
        console.error('Error adding user:', error);
      }
    
    },
    async deleteUser({commit},user_ID){
      try {
          await axios.delete(baseUrl+'/users/'+user_ID)
      window.location.reload();
      } catch (error) {
        console.error('Error deleting user:', error);
      }
     
    },
    async editUser({commit},update){
      try {
       await axios.patch(baseUrl+'/users/'+update.id,update)
      window.location.reload();  
      } catch (error) {
        console.error('Error edit user:', error);
      }
     
    },

    async registerUser({commit}, newUser){
      try {
         console.log(newUser);
      let {data} = await axios.post(baseUrl + '/users', newUser)
      alert(data.msg)
      window.location.reload()
      } catch (error) {
        console.error('Error registering product:', error);
      }
     
    },
    async loginUser({commit}, currentUser){
      try {
          let {data} = await axios.post(baseUrl + '/login', currentUser)
      $cookies.set('jwt', data.token)
      alert(data.msg)
      router.push('/')
      window.location.reload()
      commit('setLogged', true)
      window.location.reload()
      } catch (error) {
        console.error('Error login user:', error);
      }
    
    },
    async logOut(context){
      try {
           let cookies = $cookies.keys()
      console.log(cookies)
      $cookies.remove('jwt')
      window.location.reload()
      let { data } = await axios.delete(baseUrl + '/logout')
      alert(data.msg)
      } catch (error) {
        console.error('Error logging user:', error);
      }
   
    }



  },
  modules: {}
});