<template>
    <section class="header">
        <h1 class="header-title">Awesome title</h1>
        <p class="header-text">We're creating the best place to go when starting a new business or company.With Baianat you can instantly search domain names, social media handles, and see your logo in beautiful logotypes.</p>
        <img class="header-logo" src="@/assets/img/mockup.png" alt="logo"/>
    </section>
</template>

<script>
    
</script>

<style lang="scss" scoped>
    .header {
        min-height: 100vh;
        background-image: linear-gradient(to right bottom, rgba(51, 114, 51, 0.568), rgba(1, 255, 1, 0.568)), url('../../assets/img/back.jpg');
        background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &-title {
            margin: 0 auto;
            color: #000;
            margin-bottom: 2.5rem;
        }
        &-text {
            margin: 0 auto;
            text-align: center;
            color: #000;
            font-weight: bold;
            max-width: 60%;
            margin-bottom: 2.5rem;
        }
        &-logo {
            max-width: 50%;
        }
    }
</style>
