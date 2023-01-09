<template>
  <div class="error">
    <h1>404 page not found</h1>
    <p>
      The page you are looking for doesn't exist or an other error occured.
      Choose another page from sidebar.
    </p>
  </div>
</template>

<style scoped>
.error {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto;
  width: 50%;
}

p {
  font-size: 14px;
  margin: auto;
  width: 50%;
  color: white;
}

h1 {
  font-size: 50px;
  padding-bottom: 15%;
}
</style>
