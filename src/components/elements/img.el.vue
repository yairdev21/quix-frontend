<template>
    <img class="img" :src="imgSrc" alt="image"/>
</template>

<script>
    export default {
        props: {
            element: {
                type: Object,
                default: () => ({
                    data: {

                    }
                })
            }
        },

        data() {
            return {
                style: {}
            }
        },

        computed: {
            imgSrc() {
                return this.element.data.src || 'http://via.placeholder.com/1200x600?text=My%20Awsome%20Image'
            }
        }
    }
</script> 

<style lang="scss" scoped>
    .img {
        width: 150px;
    }
</style>
