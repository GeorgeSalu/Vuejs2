<template>
    <div class="usuario-lista">
        <h3>Usuario detalhe</h3>
        <p><strong>Codigo:</strong>{{ id }}</p>
        <!-- :to="`/usuario/${id}/editar`" -->
        <router-link tag="button" primario  
            :to="{name: 'editarUsuario', params: { id } ,
                query: {completo: true, lingua: 'pt'},
                hash: '#rodape'}">
            editar
        </router-link>
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
}
</script>

<style>

</style>