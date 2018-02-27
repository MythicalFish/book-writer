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
      store.commit('STOP_CREATE')
    })
}

export const destroy = (store, doc) => {
  Vue.http.delete(`/documents/${doc.id}`).then(response => {
    store.commit('SET_LIST', response.data)
  })
}

export const rename = ({ state, commit }) => {
  const { renaming } = state
  Vue.http
    .patch(`/documents/${renaming.id}`, {
      document: renaming
    })
    .then(response => {
      commit('SET_LIST', response.data)
      commit('STOP_RENAME')
    })
}

export const startCreate = store => {
  store.commit('START_CREATE')
}
export const stopCreate = store => {
  store.commit('STOP_CREATE')
}

export const startRename = (store, doc) => {
  store.commit('START_RENAME', doc)
}
export const stopRename = store => {
  store.commit('STOP_RENAME')
}
