import Vue from 'vue'
import Vuex from 'vuex'
import UI from './modules/UI'
import document from './modules/document'
import statement from './modules/statement'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    UI,
    document,
    statement
  }
})

export default store
