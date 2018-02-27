export const SET_LIST = (state, data) => {
  state.list = data
}

export const START_RENAME = (state, doc) => {
  state.renaming = doc
}

export const STOP_RENAME = state => {
  state.renaming = {}
}
