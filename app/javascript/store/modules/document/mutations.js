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

export const STOP_EDIT_STATEMENT = state => {
  state.currentStatement = 0
}

export const START_CREATE_STATEMENT = state => {
  state.creatingStatement = {}
}

export const STOP_CREATE_STATEMENT = state => {
  state.creatingStatement = false
}
