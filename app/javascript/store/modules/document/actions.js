import Vue from 'vue'
import { focusedStatement } from './getters'

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
        commit('SET_DOCUMENT', response.data)
        commit('STATEMENT_CREATED')
        resolve()
      })
  })
}

export const updateStatement = ({ state }) => {
  return Vue.http.patch(
    statementURL(state, focusedStatement(state).id),
    focusedStatement(state)
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

export const blurStatement = store => {
  const { state, commit } = store
  if (state.statementSaved) {
    commit('BLUR_STATEMENT')
  } else {
    setTimeout(() => {
      blurStatement(store)
    }, 100)
  }
}

export const statementChanged = ({ commit }) => {
  commit('STATEMENT_CHANGED')
}

export const statementSaved = ({ commit }) => {
  commit('STATEMENT_SAVED')
}

export const deleteStatement = ({ state, commit }, statement) => {
  Vue.http.delete(statementURL(state, statement.id)).then(response => {
    commit('SET_DOCUMENT', response.data)
  })
}
export const reorderStatements = ({ state, commit }, event) => {
  const { oldIndex, newIndex } = event
  Vue.http
    .patch(`/documents/${state.attributes.id}/statements`, {
      oldIndex,
      newIndex
    })
    .then(response => {
      commit('SET_DOCUMENT', response.data)
    })
}
