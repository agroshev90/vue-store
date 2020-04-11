import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import * as fb from 'firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created: function () {
    fb.initializeApp({
      apiKey: 'AIzaSyDBuNrvfj7t4302_BWZe3f740d7Nn2C_GM',
      authDomain: 'ads-vue-f9897.firebaseapp.com',
      databaseURL: 'https://ads-vue-f9897.firebaseio.com',
      projectId: 'ads-vue-f9897',
      storageBucket: 'ads-vue-f9897.appspot.com',
      messagingSenderId: '182529177126',
      appId: '1:182529177126:web:c999d45f0d0b5e5ef5d8e7',
      measurementId: 'G-CJH6JGBQGX'
    })
  }

}).$mount('#app')
