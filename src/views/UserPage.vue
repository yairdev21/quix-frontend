<template>
    <div>
        {{user}}
    </div>
</template>

<script>
    export default {
        computed: {
            user() {
                return this.$store.getters.getUser;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
