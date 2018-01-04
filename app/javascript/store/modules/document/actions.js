import Vue from 'vue'

export const toggleUI = ({ commit }, key) => {
  commit('TOGGLE_UI', key)
}

export const hideformEdit = (store, id) => {
  store.commit('HIDEFORM_EDIT', id)
}

export const showformEdit = (store, doc) => {
  store.commit('SHOWFORM_EDIT', doc)
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
      store.commit('TOGGLE_UI', 'new')
    })
}

export const destroy = (store, doc) => {
  Vue.http.delete(`/documents/${doc.id}`).then(response => {
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
