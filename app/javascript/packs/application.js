import Vue from 'vue';
import TurbolinksAdapter from 'vue-turbolinks';
import App from '../components/app.vue';

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  var element = document.getElementById("writer")
  if (element != null) {
    const app = new Vue(App).$mount(element);
    /*var vueapp = new Vue({
      el: element,
      template: '<App/>',
      components: { App }
    });*/
  }
});