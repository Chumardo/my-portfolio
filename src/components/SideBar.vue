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
          <li>
            <img src="@/assets/img/home.png" alt="Home Icon" />
            <router-link class="link" to="/">Home</router-link>
          </li>
          <li>
            <img src="@/assets/img/about.png" alt="About Icon" /><router-link
              class="link"
              to="/about"
              >ABOUT ME</router-link
            >
          </li>
          <li>
            <img src="@/assets/img/resume.png" alt="Resume Icon" /><router-link
              class="link"
              to="/resume"
              >RESUME</router-link
            >
          </li>
          <li>
            <img src="@/assets/img/blog.png" alt="Blog Icon" /><router-link
              class="link"
              to="/blog"
              >BLOG</router-link
            >
          </li>
          <li>
            <img
              src="@/assets/img/contact.png"
              alt="Contact Icon"
            /><router-link class="link" to="/contact">CONTACT</router-link>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  methods: {
    redirectHandler(routeString) {
      this.$router.push(routeString);
    },
  },
};
</script>

<style scoped>
* {
  background-color: rgba(23, 24, 27, 255);
}
aside {
  display: flex;
  flex-direction: column;
  width: 200px;
  min-height: 100vh;
  text-align: center;
  overflow: visible;
}

.sidebar {
  position: sticky;
  top: 0;
}

img {
  max-width: 200px;
  max-height: 200px;
}

.sidebar-nav {
  padding-top: 20px;
}

.sidebar-nav li {
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  justify-content: flex-start;
  align-items: center;
  border-bottom-style: solid;
  border-bottom-width: thin;
  border-bottom-color: rgba(44, 43, 43, 0.5);
}

.sidebar-nav li .link {
  margin-left: 10px;
  color: white;
}

.sidebar-nav li img {
  margin-left: 10%;
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

.link {
  text-decoration: none;
}

li:hover .link {
  color: rgb(23, 122, 212);
}

.link:hover,
.link.router-link-active,
.link.router-link-exact-active {
  color: rgb(23, 122, 212) !important;
  cursor: pointer;
}
</style>
