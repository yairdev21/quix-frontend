import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sections:[]
  },
  mutations: {

  },
  actions: {
getSections(){
  console.log('IN');
  
}
  }
})
