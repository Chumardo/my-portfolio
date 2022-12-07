<template>
  <div class="container">
    <div class="page-header">
      <h1>About Me</h1>
      <span><img src="@/assets/img/about.png" alt="About Icon" /></span>
    </div>
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

.page-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-style: dashed;
  font-size: 20px;
  border-bottom-width: thin;
  border-bottom-color: rgba(255, 255, 255, 0.5);
}

img {
  width: 40px;
  padding-bottom: 1%;
}

h1 {
  color: rgb(23, 122, 212);
  padding-bottom: 1%;
}
</style>
