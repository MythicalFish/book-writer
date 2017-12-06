import Vue from 'vue'
import Vuex from 'vuex'
import document from './modules/document'
import statement from './modules/statement'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    document,
    statement
  }
})

export default store
