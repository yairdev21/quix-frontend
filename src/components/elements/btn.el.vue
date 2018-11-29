<template>
    <b-button variant="outline-success" :href="link">
        {{link}}
    </b-button>
</template>

<script>
   import { ID } from '../../services/utils.js'

    export default {
        props: {
            data: {
                type: Object,
                required: true
            }
        },

        data() {
            return {
                id: ID()
            }
        },

        computed: {
            link() {
                return this.data.src || '#'
            }
        }
    }
</script> 

<style lang="scss" scoped>

</style>