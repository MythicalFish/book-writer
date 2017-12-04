import Vue from 'vue'

export const hideformNew = store => {
  store.commit('HIDEFORM_NEW')
}

export const showformNew = store => {
  store.commit('SHOWFORM_NEW')
}

export const hideformEdit = (store, id) => {
  store.commit('HIDEFORM_EDIT', id)
}

export const showformEdit = (store, id) => {
  store.commit('SHOWFORM_EDIT', id)
}

export const fetchList = store => {
  Vue.http.get('/documents').then(response => {
    store.commit('SET_LIST', response.data)
  })
}

export const create = store => {
  store.commit('LOADINGFORM_NEW')
  Vue.http
    .post('/documents', {
      document: store.state.new.formData
    })
    .then(response => {
      store.commit('SET_LIST', response.data)
      store.commit('HIDEFORM_NEW')
    })
}

export const destroy = (store, id) => {
  Vue.http.delete(`/documents/${id}`).then(response => {
    store.commit('SET_LIST', response.data)
  })
}
