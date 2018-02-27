import Vue from 'vue'
import Vuex from 'vuex'
import documents from './modules/documents'
import document from './modules/document'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    documents,
    document
  }
})

export default store
