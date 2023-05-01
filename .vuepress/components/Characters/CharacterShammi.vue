<template>
  <div id="app">
    <div class="container">
      <div class="has-class-centered" style="position: relative;">
        <img
          class="character-image"
          :src="require(`@alias/characters/shammi.png`)"
          alt="Shammi Hero aada hero"
        />
        <h3 class="title is-3 has-text-success">
          Welcome to the Quiz section!! 🎉
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@keyframes slide-up {
  0% {
    transform: translateY(100%) translateX(-50%);
    opacity: 0;
  }
  100% {
    transform: translateY(0) translateX(-50%);
    opacity: 1;
  }
}

.character-image {
  position: absolute;
  top: -60px;
  left: 40%;
  width: 60px;
  height: 80px;
  z-index: 1;
  transform: translateX(-50%);
  animation: slide-up 1s ease-in-out;
}
</style>
