import Vue from 'vue'
import { currentStatement } from './getters'

const statementURL = (state, id) => {
  const docID = state.attributes.id
  return `/documents/${docID}/statements/${id}`
}

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
  Vue.http.patch(
    statementURL(state, state.currentStatement),
    currentStatement(state)
  )
}

export const startCreateStatement = store => {
  store.commit('START_CREATE_STATEMENT')
}
export const stopCreateStatement = store => {
  store.commit('STOP_CREATE_STATEMENT')
}

export const focusStatement = ({ state, commit }, statement) => {
  Vue.http.get(statementURL(state, statement.id)).then(response => {
    commit('FOCUS_STATEMENT', response.data)
  })
}
export const stopEditStatement = store => {
  store.commit('STOP_EDIT_STATEMENT')
}
