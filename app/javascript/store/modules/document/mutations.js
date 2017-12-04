export const SHOWFORM_NEW = state => {
  state.new.showForm = true
}

export const HIDEFORM_NEW = state => {
  state.new = {
    showForm: false,
    isCreating: false
  }
}

export const SHOWFORM_EDIT = (state, id) => {
  state.edit.showForm = id
}

export const HIDEFORM_EDIT = state => {
  state.edit = {
    showForm: false
  }
}

export const LOADINGFORM_NEW = state => {
  state.new.isLoading = true
}

export const SET_LIST = (state, data) => {
  state.index = data
}
