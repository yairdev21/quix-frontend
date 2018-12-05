<template>
    <img class="img" :src="imgSrc" alt="image"/>
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
            imgSrc() {
                return this.style || 'http://via.placeholder.com/1200x600?text=My%20Awsome%20Image'
            }
        },
        created(){
            
        }
    }
</script> 

<style lang="scss" scoped>
    .img {
        width: 150px;
    }
</style>
