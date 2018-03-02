export const SET_DOCUMENT = (state, doc) => {
  state.attributes.id = doc.id
  state.attributes.title = doc.title
  state.statements = doc.statements.reduce((map, obj) => {
    map[obj.position] = obj
    return map
  }, {})
  state.statementIDs = doc.statements.map(s => s.id)
}

export const FOCUS_STATEMENT = (state, response) => {
  const { position, elaboration } = response
  state.focusedStatement = position
  state.statements[position].elaboration = elaboration
}

export const BLUR_STATEMENT = state => {
  state.focusedStatement = 0
}

export const NEW_STATEMENT = state => {
  state.creatingStatement = {}
}

export const STATEMENT_CREATED = state => {
  state.creatingStatement = false
}

export const STATEMENT_CHANGED = state => {
  state.statementSaved = false
}

export const STATEMENT_SAVED = state => {
  state.statementSaved = true
}
