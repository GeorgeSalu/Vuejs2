<template>
    <div class="inicio">
        <h2>Usuarios</h2>
        <hr/>
        <p><strong>Codigo:</strong>{{ id }}</p>
        <button sucesso @click="irParaInicio">Voltar</button>
    </div>
</template>

<script>
export default {
    props: ['id'],
    /*data() {
        return {
            id: this.$route.params.id
        }
    },
    watch: {
        $route(to, from) {
            this.id = to.params.id;
        }
    },*/
    methods: {
        irParaInicio() {
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>