import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://curso-vue-33b94.firebaseio.com/'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios
    }
})
