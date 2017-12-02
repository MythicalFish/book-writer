import Vue from 'vue'

export const toggleNew = store => {
  store.commit('TOGGLE_NEW')
}

export const fetchIndex = store => {
  Vue.http.get('/documents').then(response => {
    store.commit('SET_INDEX', response.data)
  })
}

export const create = store => {
  console.log(store.state.new.formData)
  Vue.http
    .post('/documents', {
      document: store.state.new.formData
    })
    .then(response => {
      store.commit('SET_INDEX', response.data)
      store.commit('TOGGLE_NEW')
    })
}
