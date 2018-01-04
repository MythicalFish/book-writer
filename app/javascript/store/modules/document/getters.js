export const isEditing = state => id => {
  return state.editing.id === id
}
export const UI = state => key => {
  return !!state.UI[key]
}
