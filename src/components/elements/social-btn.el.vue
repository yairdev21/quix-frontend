<template>
<section >
    <b-button contenteditable="false" variant="outline-success" :href="link"><img src="imgs/gmail.png"/></b-button>

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
            },
            img() {
                return `../../public/img/icons/gmail.png` || '#'
            }
        }
    }
</script> 

<style lang="scss" scoped>

</style>