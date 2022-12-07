<template>
  <div class="main">
    <SideBar />
    <router-view></router-view>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";

export default {
  name: "App",
  components: {
    SideBar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.main {
  display: flex;
  justify-content: flex-start;
}
</style>
