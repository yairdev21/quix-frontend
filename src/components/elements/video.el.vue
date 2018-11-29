<template>
        <div class='embed-container' :style="{ height: '100%' }">
            <iframe class='embed-container-iframe' :src='`https://www.youtube.com/embed/${video}`' frameborder='0' allowfullscreen></iframe>
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
            video() {
                const video = this.data.src || 'https://www.youtube.com/watch?v=e7sw5xA066Y';
                const videoId = video.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);

                return videoId[1]
            }
        }
    }

</script>

<style lang="scss" scoped>
    .embed-container {
        position: relative;
        overflow: hidden;
        max-width: 100%;
        max-height: 100%;

    }
</style>
