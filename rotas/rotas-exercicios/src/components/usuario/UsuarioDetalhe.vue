<template>
    <div class="usuario-lista">
        <h3>Usuario detalhe</h3>
        <p><strong>Codigo:</strong>{{ id }}</p>
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