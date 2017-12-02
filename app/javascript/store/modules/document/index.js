import * as actions from './actions'
import * as mutations from './mutations'

const state = {
  new: {
    showForm: false,
    formData: {
      title: null
    }
  },
  index: [],
  active: {}
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
