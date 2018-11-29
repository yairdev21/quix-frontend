<template>
        <div class='embed-container' :style="{ height: '100%' }">
            <iframe class='embed-container-iframe' :src='`https://www.youtube.com/embed/${video}`' frameborder='0' allowfullscreen></iframe>
        </div>
</template>

<script>
export default {
    data() {
        return {
            videoUrl: 'https://www.youtube.com/watch?v=e7sw5xA066Y'
        }
    },

    computed: {
        video() {
            const videoId = this.videoUrl.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);

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
