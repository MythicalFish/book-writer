export const SET_DOCUMENT = (state, id) => {
  state.document.id = id
}
export const SET_LIST = (state, data) => {
  state.list = data
}
export const TOGGLE_UI = (state, key) => {
  if (Array.isArray(key)) {
    const oldVal = state.UI[key[0]]
    let newVal = key[1]
    if (oldVal === newVal) newVal = 0
    state.UI[key[0]] = newVal
  } else {
    state.UI[key] = !state.UI[key]
  }
}
