export const SET_DOCUMENT = (state, doc) => {
  state.attributes = doc
}

export const START_EDIT_STATEMENT = (state, statement) => {
  state.editingStatement = statement
}

export const STOP_EDIT_STATEMENT = state => {
  state.editingStatement = false
}

export const START_CREATE_STATEMENT = state => {
  state.creatingStatement = {}
}

export const STOP_CREATE_STATEMENT = state => {
  state.creatingStatement = false
}
