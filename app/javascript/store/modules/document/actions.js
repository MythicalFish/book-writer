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
  return Vue.http.patch(
    statementURL(state, state.currentStatement),
    currentStatement(state)
  )
}

export const newStatement = store => {
  store.commit('NEW_STATEMENT')
}

export const focusStatement = ({ state, commit }, statement) => {
  Vue.http.get(statementURL(state, statement.id)).then(response => {
    commit('FOCUS_STATEMENT', response.data)
  })
}

export const statementChanged = ({ commit }) => {
  commit('STATEMENT_CHANGED')
}

export const statementSaved = ({ commit }) => {
  commit('STATEMENT_SAVED')
}
