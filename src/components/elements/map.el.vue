<template>
    <div class="map" ref="map"></div>
</template>

<script>
    export default {
        data() {
            return {
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
                        lat: this.lat,
                        lng: this.lng
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
