import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Firebase from './plugins/firebase'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import './registerServiceWorker'
import axios from 'axios' //追記
import VueAxios from 'vue-axios' //追記



Vue.use(Vuetify)
Vue.use(VueAxios, axios) //追記


const vuetify = new Vuetify();

Firebase.init();
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')