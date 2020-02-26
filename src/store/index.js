import Vue from 'vue'
import Vuex from 'vuex'
import changeCity from './headLeft.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    changeCity,
  }
})
