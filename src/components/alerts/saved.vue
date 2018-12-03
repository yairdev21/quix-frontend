<template>
    <button v-on:click="showAlert">Saved!</button>
</template>
 
<script>
export default {
    data() {
        return {};
    },
    methods: {
        showAlert(){
            this.$swal('Saved');
        }
    }
}
</script> 