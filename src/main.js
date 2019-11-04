import axios from "axios";
import Vue from "vue";
import App from "./App.vue";

require("dotenv").config();

axios.defaults.baseURL = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
