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
    data() {
        return {
            id: this.$route.params.id
        }
    },
    methods: {
        irParaInicio() {
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>