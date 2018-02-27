import Vue from 'vue'

export const index = store => {
  Vue.http.get('/documents').then(response => {
    store.commit('SET_LIST', response.data)
  })
}

export const create = store => {
  Vue.http
    .post('/documents', {
      document: store.state.creating
    })
    .then(response => {
      store.commit('SET_LIST', response.data)
      store.commit('UI/TOGGLE_UI', ['document', 'creating'], { root: true })
    })
}

export const destroy = (store, id) => {
  Vue.http.delete(`/documents/${id}`).then(response => {
    store.commit('SET_LIST', response.data)
  })
}

export const rename = ({ state, commit }) => {
  const { renaming } = state
  Vue.http
    .patch(`/documents/${renaming.id}`, {
      document: state.renaming
    })
    .then(response => {
      commit('SET_LIST', response.data)
      commit('STOP_RENAME')
    })
}

export const stopRename = store => {
  store.commit('STOP_RENAME')
}

export const startRename = (store, doc) => {
  store.commit('START_RENAME', doc)
}
