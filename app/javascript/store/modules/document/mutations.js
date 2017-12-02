export const TOGGLE_NEW = state => {
  const { showForm } = state.new
  state.new.showForm = !showForm
}

export const SET_INDEX = (state, data) => {
  state.index = data
}
