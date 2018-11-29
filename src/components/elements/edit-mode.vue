<template>
    <div>
        <slot></slot>
    </div>    
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        isEditable: {
            type: boolean,
            default: () => true
        }
    },
    
    data() {
        return {
            content: this.text,
            isEdit: this.isEditable
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
