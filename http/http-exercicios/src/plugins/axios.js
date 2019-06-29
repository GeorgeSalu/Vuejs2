import Vue from 'vue'
import axios from 'axios'

//axios.defaults.baseURL = 'https://curso-vue-33b94.firebaseio.com/'
// adicionando headers globais
//axios.defaults.headers.common['Authorization'] = 'abc123'

Vue.use({
    install(Vue) {
        //Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-33b94.firebaseio.com/'
        })

        /*Interceptando requisicao
        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method)
        })*/

        /* Interceptando resposta
        Vue.prototype.$http.interceptors.response.use(res => {
            const array = []
            for(let chave in res.data) {
                array.push({ id: chave, ...res.data[chave]})
            }
        }, error => Promise.reject(error))
        */
    }
})
