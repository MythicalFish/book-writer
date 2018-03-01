export const SET_DOCUMENT = (state, doc) => {
  state.attributes.id = doc.id
  state.attributes.title = doc.title
  state.statements = doc.statements.reduce((map, obj) => {
    map[obj.id] = obj
    return map
  }, {})
}

export const FOCUS_STATEMENT = (state, response) => {
  const { id, elaboration } = response
  state.currentStatement = id
  state.statements[id].elaboration = elaboration
}

export const NEW_STATEMENT = state => {
  state.creatingStatement = {}
}

export const STOP_CREATE_STATEMENT = state => {
  state.creatingStatement = false
}

export const STATEMENT_CHANGED = state => {
  state.statementSaved = false
}

export const STATEMENT_SAVED = state => {
  state.statementSaved = true
}
