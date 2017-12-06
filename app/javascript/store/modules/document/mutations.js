export const SHOWFORM_NEW = state => {
  state.new.showForm = true
}

export const HIDEFORM_NEW = state => {
  state.new = {
    showForm: false,
    isLoading: false,
    formData: {}
  }
}

export const SHOWFORM_EDIT = (state, doc) => {
  state.editing = doc
}

export const HIDEFORM_EDIT = state => {
  state.editing = {}
}

export const LOADINGFORM_NEW = state => {
  state.new.isLoading = true
}

export const SET_LIST = (state, data) => {
  state.list = data
}
