<template>
        <p class="text" :contenteditable="isEditable" v-text="content" @blur="saveText"></p>
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
                content: this.data.text,
                isEditable: false
            }
        },

        methods: {
            getContent() {               
                return this.content
            },
            saveText(ev) {
                this.content = ev.target.innerText;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
