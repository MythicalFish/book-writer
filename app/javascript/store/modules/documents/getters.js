export const isRenaming = state => doc => {
  return state.renaming.id === doc.id
}

export const isCreating = state => {
  return !!state.creating
}
