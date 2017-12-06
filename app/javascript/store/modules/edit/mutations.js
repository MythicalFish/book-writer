export const SET_DOCUMENT = (state, { id, title, statements }) => {
  state.document = { id, title }
  state.statements = statements
}

export const SET_STATEMENTS = (state, data) => {
  state.statements = data
}
