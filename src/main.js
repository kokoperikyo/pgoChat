import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Firebase from './plugins/firebase'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
const vuetify = new Vuetify();

Firebase.init();
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')