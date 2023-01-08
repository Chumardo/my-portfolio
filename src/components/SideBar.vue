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
            <router-link class="link" to="/"
              ><HomeIcon class="icon" :color="`#ffffff`"></HomeIcon
              >Home</router-link
            >
          </li>
          <li>
            <router-link class="link" to="/about">
              <AboutIcon class="icon" :color="`#ffffff`"> </AboutIcon>ABOUT
              ME</router-link
            >
          </li>
          <li>
            <router-link class="link" to="/resume"
              ><ResumeIcon class="icon" :color="`#ffffff`"></ResumeIcon
              >RESUME</router-link
            >
          </li>
          <li>
            <router-link class="link" to="/blog"
              ><BlogIcon class="icon" :color="`#ffffff`"></BlogIcon
              >BLOG</router-link
            >
          </li>
          <li>
            <router-link class="link" to="/contact"
              ><ContactIcon class="icon" :color="`#ffffff`"></ContactIcon
              >CONTACT</router-link
            >
          </li>
        </ul>
      </div>
      <div class="sidebar-bottom">
        <div class="social">
          <a href="https://www.facebook.com/dachigiorgadzee/" target="_blank"
            ><FacebookIcon class="icon" :color="`#ffffff`"> </FacebookIcon
          ></a>

          <a href="https://github.com/Chumardo" target="_blank"
            ><GitIcon class="icon" :color="`#ffffff`"> </GitIcon
          ></a>

          <a href="https://www.linkedin.com/in/dachi-giorgadze/" target="_blank"
            ><LinkedinIcon class="icon" :color="`#ffffff`"></LinkedinIcon
          ></a>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import HomeIcon from "../components/Icons/HomeIcon.vue";
import AboutIcon from "../components/Icons/AboutIcon.vue";
import ResumeIcon from "../components/Icons/ResumeIcon.vue";
import BlogIcon from "../components/Icons/BlogIcon.vue";
import ContactIcon from "../components/Icons/ContactIcon.vue";
import GitIcon from "../components/Icons/GitIcon.vue";
import FacebookIcon from "../components/Icons/FacebookIcon.vue";
import LinkedinIcon from "../components/Icons/LinkedinIcon.vue";

export default {
  methods: {
    redirectHandler(routeString) {
      this.$router.push(routeString);
    },
  },
  components: {
    AboutIcon,
    HomeIcon,
    ResumeIcon,
    BlogIcon,
    ContactIcon,
    GitIcon,
    FacebookIcon,
    LinkedinIcon,
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
  display: flex;
  flex-direction: row;
  text-decoration: none;
  justify-content: flex-start;
  padding-left: 15%;
  align-items: center;
  color: white;
  width: 100%;
}

.link:hover,
.link:hover .icon,
.link.router-link-active,
.link.router-link-exact-active .icon {
  color: rgb(23, 122, 212) !important;
  cursor: pointer;
  fill: #177ad4;
}

.icon {
  height: 24px;
  width: 24px;
  padding-right: 15px;
}

.icon:hover {
  fill: #177ad4;
  cursor: pointer;
}

.sidebar-bottom {
  padding-top: 300px;
}

.social {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
