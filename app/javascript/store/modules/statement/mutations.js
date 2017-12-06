export const SET_DOCUMENT = (state, id) => {
  state.document.id = id
}
export const SET_LIST = (state, data) => {
  state.list = data
}
export const SHOW_UI = (state, key) => {
  state.UI[key] = true
}
