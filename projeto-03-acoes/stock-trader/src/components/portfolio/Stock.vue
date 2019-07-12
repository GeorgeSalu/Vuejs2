<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4> 
        <v-card class="blue darken-3 white--text">
            <v-card-title class="headeline">
                <strong>{{ stock.name }} 
                    <small>(Preco: {{ stock.price }} {{ stock.quantity }})</small></strong>
            </v-card-title>
        </v-card>
        <v-card >
            <v-container fill-height>
                <v-text-field label="Quantidade" type="number" v-model.number="quantity" />
                <v-btn class="blue darken-3 white--text"
                    :disabled="insufficienteQuantity || quantity <= 0 || !Number.isInteger(quantity)"
                    @click="sellStock">{{ insufficienteQuantity ? 'Insuficiente' : 'Vender' }}</v-btn>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    computed: {
        insufficienteQuantity() {
            return this.quantity > this.stock.quantity
        }
    },
    methods: {
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }
            
            this.$store.dispatch('sellStock', order)
            this.quantity = 0
        }
    }
}
</script>

<style>

</style>