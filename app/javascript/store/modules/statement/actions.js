import Vue from 'vue'

export const index = ({ commit }, docID) => {
  Vue.http.get(`/documents/${docID}/statements`).then(response => {
    commit('SET_DOCUMENT', docID)
    commit('SET_LIST', response.data)
  })
}

export const create = ({ state, commit }) => {
  return new Promise(resolve => {
    Vue.http
      .post(`/documents/${state.document.id}/statements`, {
        statement: state.new
      })
      .then(response => {
        commit('SET_LIST', response.data)
        resolve()
      })
  })
}

export const update = ({ state, commit }) => {
  const docID = state.document.id
  const id = state.editing.id
  Vue.http
    .patch(`/documents/${docID}/statements/${id}`, {
      statement: state.editing
    })
    .then(response => {
      commit('SET_LIST', response.data)
      commit('HIDEFORM_EDIT')
    })
}
