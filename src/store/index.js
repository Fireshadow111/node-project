import { createStore } from 'vuex'
import axios from 'axios'

const baseUrl = 'https://node-project-1-3d99.onrender.com'
/* eslint-disable */
export default createStore({
  state: {
    products: null,
    loggedIn: false
  },
  getters: {},
  mutations: {
    setProducts(state, data) {
      state.products = data;
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