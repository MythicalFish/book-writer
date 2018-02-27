export const isEditingStatement = state => statement => {
  return state.editingStatement.id === statement.id
}

export const isCreatingStatement = state => {
  return !!state.creatingStatement
}
