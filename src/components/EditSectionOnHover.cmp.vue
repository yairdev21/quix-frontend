<template>
  <section>
    <div class="edit-on-hover">
      <button @click="$emit('delleteSection')"> 
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.edit-on-hover {
  position: absolute;
  right: 0;
  margin-right: 0.6rem;
  z-index: 5;
}
</style>
