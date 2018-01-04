export const TOGGLE_UI = (state, key) => {
  state.UI[key] = !state.UI[key]
}

export const SHOWFORM_EDIT = (state, doc) => {
  state.editing = doc
}

export const HIDEFORM_EDIT = state => {
  state.editing = {}
}

export const SET_LIST = (state, data) => {
  state.list = data
}
