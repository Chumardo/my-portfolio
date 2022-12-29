<template>
  <div class="page-header">
    <h1>{{ title }}</h1>
    <span
      ><img :src="require(`@/assets/img/${filename}`)" alt="About Icon"
    /></span>
  </div>
</template>

<script>
export default {
  props: ["title", "filename"],
};
</script>

<style scoped>
.page-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-style: dashed;
  font-size: 20px;
  border-bottom-width: thin;
  border-bottom-color: rgba(255, 255, 255, 0.5);
  position: sticky;
  top: 0;
  background-color: rgba(44, 45, 47, 255);
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
