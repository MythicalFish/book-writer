import Vue from 'vue'

export const hideformNew = store => {
  store.commit('HIDEFORM_NEW')
}

export const showformNew = store => {
  store.commit('SHOWFORM_NEW')
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
  store.commit('LOADINGFORM_NEW')
  Vue.http
    .post('/documents', {
      document: store.state.new.formData
    })
    .then(response => {
      store.commit('SET_LIST', response.data)
      store.commit('HIDEFORM_NEW')
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
