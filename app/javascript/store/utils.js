import initialState from './state'

export const resetState = state => {
  Object.assign(state, initialState)
}
