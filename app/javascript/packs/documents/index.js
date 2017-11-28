import Vue from 'vue'
import TurbolinksAdapter from 'vue-turbolinks'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import Component from './Index.vue'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(TurbolinksAdapter)
Vue.use(ElementUI)
Vue.use(VueResource)

document.addEventListener('turbolinks:load', () => {
  Vue.http.headers.common['X-CSRF-Token'] = document
    .querySelector('meta[name="csrf-token"]')
    .getAttribute('content')
  var element = document.getElementById('documents')
  if (element != null) {
    new Vue({
      el: element,
      render: h => h(Component)
    })
  }
})
