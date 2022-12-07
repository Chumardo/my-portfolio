<template>
  <aside>
    <div class="sidebar-top">
      <img :src="require('@/assets/img/picture.jpg')" />
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

.sidebar-nav li {
  color: rgba(87, 80, 89, 255);
}
</style>
