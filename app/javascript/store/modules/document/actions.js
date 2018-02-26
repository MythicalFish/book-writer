import Vue from 'vue'

export const toggleUI = ({ commit }, key) => {
  console.log('toggleUI')
  commit('TOGGLE_UI', key)
}

export const index = store => {
  Vue.http.get('/documents').then(response => {
    store.commit('SET_LIST', response.data)
  })
}

export const create = store => {
  Vue.http
    .post('/documents', {
      document: store.state.new
    })
    .then(response => {
      store.commit('SET_LIST', response.data)
      store.commit('TOGGLE_UI', 'creating')
    })
}

export const destroy = (store, id) => {
  Vue.http.delete(`/documents/${id}`).then(response => {
    store.commit('SET_LIST', response.data)
  })
}

export const update = ({ state, commit }) => {
  const { editing } = state
  Vue.http
    .patch(`/documents/${editing.id}`, {
      document: state.editing
    })
    .then(response => {
      commit('SET_LIST', response.data)
      commit('HIDEFORM_EDIT')
    })
}
