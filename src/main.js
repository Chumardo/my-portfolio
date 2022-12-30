import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import HomePage from "./pages/HomePage.vue";
import AboutmePage from "./pages/AboutmePage.vue";
import ResumePage from "./pages/ResumePage.vue";
import BlogPage from "./pages/BlogPage.vue";
import ContactPage from "./pages/ContactPage.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/about", component: AboutmePage },
    { path: "/resume", component: ResumePage },
    { path: "/blog", component: BlogPage },
    { path: "/contact", component: ContactPage },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

const app = createApp(App);

app.use(router);

router.isReady().then(function () {
  app.mount("#app");
});
