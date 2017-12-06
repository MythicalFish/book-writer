import Vue from 'vue'

export const fetchDocument = ({ commit }, id) => {
  Vue.http.get(`/documents/${id}`).then(response => {
    commit('SET_DOCUMENT', response.data)
  })
}

export const createStatement = ({ state, commit }) => {
  return new Promise(resolve => {
    Vue.http
      .post(`/documents/${state.document.id}/statements`, {
        statement: state.newStatement.formData
      })
      .then(response => {
        commit('SET_STATEMENTS', response.data)
        resolve()
      })
  })
}
