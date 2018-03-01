import Vue from 'vue'
import TurbolinksAdapter from 'vue-turbolinks'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Notifications from 'vue-notification'
import App from '../components/App.vue'
import Index from '../pages/Index'
import Edit from '../pages/Edit'
import 'element-ui/lib/theme-chalk/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import store from '../store'

Vue.use(TurbolinksAdapter)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(Notifications)

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
      store,
      template: '<App />',
      render: h => h(App)
    })
  }
})
