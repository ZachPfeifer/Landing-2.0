import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

let api = Axios.create({
  baseURL: 'https://swapi.co/api/'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
  }
})
