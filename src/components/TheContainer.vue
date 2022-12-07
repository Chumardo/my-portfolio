<template>
  <div class="container">
    <slot
      >This is the default content if nothing gets specified to go here</slot
    >
  </div>
</template>

<style scoped>
.container {
  background-color: rgba(44, 45, 47, 255);
  width: 100%;
  padding-left: 17%;
  padding-right: 17%;
  padding-top: 2%;
}
</style>
