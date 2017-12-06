export const SHOWFORM_NEW = state => {
  state.new.showForm = true
}

export const HIDEFORM_NEW = state => {
  state.new = {
    showForm: false,
    isLoading: false,
    formData: {
      title: null
    }
  }
}

export const SHOWFORM_EDIT = (state, doc) => {
  state.edit.showFormFor = doc.id
  state.edit.formData.title = doc.title
}

export const HIDEFORM_EDIT = state => {
  state.edit.showFormFor = 0
}

export const LOADINGFORM_NEW = state => {
  state.new.isLoading = true
}

export const SET_LIST = (state, data) => {
  state.index = data
}
