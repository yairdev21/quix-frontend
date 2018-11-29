<template>
    <div>
        <p class="text">
            {{text}}
        </p>
        <input type="text"/>
    </div>
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
            text() {                
                return this.data.text || 'not found'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
