new Vue({
    el: '#app',
    data: {
        playerLife: 100,
        mosterLife: 100
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.mosterLife == 0
        }
    },
    methods: {

    },
    watch: {

    }
})