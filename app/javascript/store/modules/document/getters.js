export const isStatementFocused = state => statement => {
  return state.focusedStatement === statement.position
}

export const isCreatingStatement = state => {
  return !!state.creatingStatement
}

export const focusedStatement = state => {
  const id = state.focusedStatement
  if (!id) return null
  return state.statements[id]
}
