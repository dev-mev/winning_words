import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

require('dotenv').config();

axios.defaults.baseURL = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

