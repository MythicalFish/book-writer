export const UI = state => key => {
  if (Array.isArray(key)) {
    return state.UI[key[0]] === key[1]
  }
  return state.UI[key]
}
