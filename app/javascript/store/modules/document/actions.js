import Vue from 'vue'

export const fetch = ({ commit }, id) => {
  Vue.http.get(`/documents/${id}`).then(response => {
    commit('SET_DOCUMENT', response.data)
  })
}

export const createStatement = ({ state, commit }) => {
  return new Promise(resolve => {
    Vue.http
      .post(`/documents/${state.attributes.id}/statements`, {
        statement: state.creatingStatement
      })
      .then(response => {
        commit('SET_LIST', response.data)
        resolve()
      })
  })
}

export const updateStatement = ({ state }) => {
  const docID = state.attributes.id
  const id = state.editingStatement.id
  Vue.http.patch(`/documents/${docID}/statements/${id}`, {
    statement: state.editingStatement
  })
}

export const startCreateStatement = store => {
  store.commit('START_CREATE_STATEMENT')
}
export const stopCreateStatement = store => {
  store.commit('STOP_CREATE_STATEMENT')
}

export const startEditStatement = ({ state, commit }, statement) => {
  Vue.http
    .get(`/documents/${state.attributes.id}/statements/${statement.id}`)
    .then(response => {
      commit('START_EDIT_STATEMENT', response.data)
    })
}
export const stopEditStatement = store => {
  store.commit('STOP_EDIT_STATEMENT')
}
