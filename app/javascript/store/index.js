import Vue from 'vue'
import Vuex from 'vuex'
import index from './modules/index'
import edit from './modules/edit'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    index,
    edit
  }
})

export default store
