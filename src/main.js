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
    { path: "/", component: HomePage, meta: { title: "Home" } },
    { path: "/about", component: AboutmePage, meta: { title: "About" } },
    { path: "/resume", component: ResumePage, meta: { title: "Resume" } },
    { path: "/blog", component: BlogPage, meta: { title: "Blogs" } },
    { path: "/contact", component: ContactPage, meta: { title: "Contact" } },
    {
      path: "/:notFound(.*)",
      component: NotFound,
      meta: { title: "NotFound" },
    },
  ],
});

const app = createApp(App);

app.use(router);

router.isReady().then(function () {
  app.mount("#app");
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
