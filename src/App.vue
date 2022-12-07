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
  background-color: rgb(182, 182, 182);
  color: rgb(133, 133, 133);
}

.main {
  display: flex;
  justify-content: flex-start;
}
</style>
