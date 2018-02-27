export const SET_LIST = (state, data) => {
  state.list = data
}

export const START_RENAME = (state, doc) => {
  state.renaming = doc
}

export const STOP_RENAME = state => {
  state.renaming = {}
}

export const START_CREATE = state => {
  state.creating = {}
}

export const STOP_CREATE = state => {
  state.creating = false
}
