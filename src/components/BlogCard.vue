<template>
  <div class="card">
    <router-link to="/">
      <div class="cover">
        <img
          :src="blog.cover"
          style="width: 30vh; height: 25vh"
          alt="Blog Image"
        />
      </div>

      <div class="blog-content">
        <div class="text">
          <h2>{{ blog.title }}</h2>
          <p>{{ blog.date }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["blog"],
};
</script>

<style scoped>
.card {
  position: relative;
  text-align: center;
  color: white;
  border: 1px solid #222324;
  padding-bottom: 15%;
}

.blog-content {
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgba(44, 45, 47, 255);
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  border-top: none;
}

.text {
  width: 80%;
  height: 100%;
  background-color: rgba(44, 45, 47, 255);
  position: absolute;
  top: -50%;
  display: flex;
  padding-top: 5%;
  flex-direction: column;
  justify-content: space-between;
  color: white;
}
</style>
