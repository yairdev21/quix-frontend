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
                lat: undefined,
                lng: undefined
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
            console.log();
            
            this.initMap(this.data.lat, this.data.lng)    
        }
    }
</script>

<style lang="scss" scoped>
    .map {
        width: 350px;
        height: 250px;
    }
</style>
