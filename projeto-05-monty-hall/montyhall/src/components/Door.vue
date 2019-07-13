<template>

</template>

<script>
import Gift from './Gift'

export default {
    name: 'Door',
    components: { Gift },
    props: {
        number: {},
        hasGift: {type: Boolean}
    },
    data: function() {
        return {
            open: false,
            selected: false
        }
    }
}
</script>

<style>

</style>