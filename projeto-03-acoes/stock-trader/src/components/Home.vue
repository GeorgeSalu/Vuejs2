<template>
    <div>
        <h1 class="display-3 font-weight-light mb-4">Negocie e Consulte suas acoes</h1>
        <v-sheet :elevation="6" class="pa-2 primary">
            <v-icon class="white--text mr-3">Info</v-icon>
            <span class="headline white--text font-weight-light">
                Voce pode salvar e carregar os dados<span>
        </v-sheet>
        <v-sheet :elevation="6" class="pa-2 primary">
            <v-icon class="white--text mr-3">Info</v-icon>
            <span class="headline white--text font-weight-light">
                Clique em 'finalizar Dia' para iniciar um novo dia<span>
        </v-sheet>
        <v-divider class="my-4"></v-divider>
        <p class="display-1"><strong>Seu saldo:</strong>{{ funds | currency }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        funds() {
            return this.$store.getters.funds
        }
    }
}
</script>

<style>

</style>