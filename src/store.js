import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

let api = Axios.create({
  baseURL: 'https://swapi.co/api/'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    targets: [{
      name: 'Jake',
      img: "http://jakeoverall.github.io/resume/assets/img/jake-sm.jpg",
      health: 100
    }, {
      name: 'Bob',
      img: "http://vignette3.wikia.nocookie.net/mycun-the-movie/images/c/c0/Bob.jpeg/revision/latest/scale-to-width-down/304?cb=20160110034246",
      health: 120
    }, {
      name: "Steve",
      img: "https://i.redd.it/e727iwai0i111.jpg",
      health: 70
    }],
    swapiPeople: []
  },
  mutations: {
    //first value on every mutation is state
    attack(state, hitValue) {
      state.targets[0].health -= hitValue
    },
    addPeople(state, people) {
      state.swapiPeople = people
    }
  },
  actions: {
    //first parameter on every action is {commit, dispatch}
    attack({ commit, dispatch }, hitValue) {
      api.get('people')
        .then(res => {
          commit('addPeople', res.data.results)
          commit('attack', hitValue)
        })
    }
  }
})
