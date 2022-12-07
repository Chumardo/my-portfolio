<template>
  <aside>
    <div class="sidebar">
      <div class="sidebar-top">
        <img :src="require('@/assets/img/picture.jpg')" />
        <div class="picture-text">
          <p>DACHI GIORGADZE</p>
        </div>
      </div>
      <div class="sidebar-nav">
        <ul>
          <li>HOME</li>
          <li>ABOUT ME</li>
          <li>RESUME</li>
          <li>PORTFOLIO</li>
          <li>BLOG</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<style scoped>
* {
  background-color: rgba(23, 24, 27, 255);
}
aside {
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100vh;
  text-align: center;
}

img {
  max-width: 200px;
  max-height: 200px;
}

.sidebar-nav {
  padding-top: 20px;
}

.sidebar-nav li {
  color: rgba(87, 80, 89, 255);
  padding: 0.5rem;
}

.sidebar-top {
  position: relative;
}

.picture-text {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  background-color: rgb(23, 122, 212);
  width: 100%;
  height: 40px;
}

.picture-text p {
  background-color: rgb(23, 122, 212);
  font-size: 20px;
  width: 100%;
  color: white;
}
</style>
