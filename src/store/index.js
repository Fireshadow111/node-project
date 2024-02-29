import { createStore } from 'vuex'
import axios from 'axios'

const baseUrl = 'https://node-project-1-3d99.onrender.com'
/* eslint-disable */
export default createStore({
  state: {
    products: null,
    users: null,
    loggedIn: false
  },
  getters: {},
  mutations: {
    setProducts(state, data) {
      state.products = data;
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

    async getProduct({commit}){
      await axios.get(baseUrl+'/products')
    },

    async addProduct({commit},add) {
     const {data} = await axios.post(baseUrl+'/products',add)
     commit("setProducts", data);
     window.location.reload();
     
    },

    async deleteProd({commit},prod_ID){
       await axios.delete(baseUrl+'/products/'+prod_ID)
      window.location.reload();
    },

    async editProd({commit},update){
      await axios.patch(baseUrl+'/products/'+update.id,update)
      window.location.reload();
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
      await axios.get(baseUrl+'/users')
    },
    async addUser({commit},add) {
     const {data} = await axios.post(baseUrl+'/users',add)
     commit("setUser", data);
     window.location.reload();
    },
    async deleteUser({commit},user_ID){
       await axios.delete(baseUrl+'/users/'+user_ID)
      window.location.reload();
    },
    async editUser({commit},update){
      await axios.patch(baseUrl+'/users/'+update.id,update)
      window.location.reload();
    },




    async registerUser({commit}, newUser){
      console.log(newUser);
      let {data} = await axios.post(baseUrl + '/users', newUser)
      alert(data.msg)
      window.location.reload()
    },
    async loginUser({commit}, currentUser){
      let {data} = await axios.post(baseUrl + '/login', currentUser)
      $cookies.set('jwt', data.token)
      alert(data.msg)
      router.push('/')
      window.location.reload()
      commit('setLogged', true)
      window.location.reload()
    },
    async logOut(context){
      let cookies = $cookies.keys()
      console.log(cookies)
      $cookies.remove('jwt')
      window.location.reload()
      let { data } = await axios.delete(baseUrl + '/logout')
      alert(data.msg)
    }



  },
  modules: {}
});