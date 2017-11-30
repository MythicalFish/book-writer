import Vue from 'vue'
import TurbolinksAdapter from 'vue-turbolinks'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from '../components/App'
import Index from '../components/Index'
import Edit from '../components/Edit'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(TurbolinksAdapter)
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueResource)

const router = new VueRouter({
  routes: [
    { path: '/', component: Index, name: 'index' },
    { path: '/:id', component: Edit, name: 'edit' }
  ],
  mode: 'history'
})

document.addEventListener('turbolinks:load', () => {
  Vue.http.headers.common['X-CSRF-Token'] = document
    .querySelector('meta[name="csrf-token"]')
    .getAttribute('content')
  const el = document.getElementById('app')
  if (el != null) {
    new Vue({
      el: '#app',
      router,
      template: '<App />',
      render: h => h(App)
    })
  }
})
