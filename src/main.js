import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import HomePage from "./pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: HomePage }],
});

const app = createApp(App);

app.use(router);

router.isReady().then(function () {
  app.mount("#app");
});
