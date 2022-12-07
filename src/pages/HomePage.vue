<template>
  <div class="container">
    <div class="text">
      <h1>DACHI <span>GIORGADZE</span></h1>
      <p>I am a <u>Web Developer</u></p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("@/assets/img/background.jpg");
  background-size: cover;
  width: 100%;
}

.text {
  color: rgb(255, 255, 255);
  font-size: 22px;
  text-align: center;
}

.text span {
  color: rgb(23, 122, 212);
}

.text u {
  text-decoration-color: rgb(23, 122, 212);
}
</style>
