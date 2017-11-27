import Vue from 'vue'
import TurbolinksAdapter from 'vue-turbolinks'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from '../components/app.vue'

Vue.use(ElementUI)
Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  var element = document.getElementById('documents')
  new Vue(App).$mount(element)
})
