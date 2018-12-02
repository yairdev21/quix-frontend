<template>
<section contenteditable="false">
    <b-button variant="outline-success" :href="link">FACEBNOOK</b-button>
</section>
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