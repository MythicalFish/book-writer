export const isRenaming = state => doc => {
  return state.renaming.id === doc.id
}
