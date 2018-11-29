<template>
    <div class="map" ref="map"></div>
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
                id: ID(),
                lat: 32.0880288,
                lng: 34.803230100000064
            }
        },

        methods: {
            initMap() {
                const google = window.google;

                new google.maps.Map(this.$refs.map, {
                    zoom:12,
                    center: {
                        lat: +this.data.lat,
                        lng: +this.data.lng
                    }
                })
            }
        },
        
        mounted() {
            this.initMap()    
        }
    }
</script>

<style lang="scss" scoped>
    .map {
        width: 350px;
        height: 250px;
    }
</style>
