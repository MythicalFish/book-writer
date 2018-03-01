export const isStatementFocused = state => statement => {
  return state.currentStatement === statement.id
}

export const isCreatingStatement = state => {
  return !!state.creatingStatement
}

export const currentStatement = state => {
  const id = state.currentStatement
  if (!id) return null
  return state.statements[id]
}
