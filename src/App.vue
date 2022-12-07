<template>
  <div class="main">
    <SideBar />
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
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
#app {
  background-color: rgba(44, 45, 47, 255);
}
* {
  margin: 0;
  padding: 0;
}

.main {
  display: flex;
  justify-content: flex-start;
}

.route-enter-from {
  transform: scale(0.5, 0.5);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  transform: scale(0.5, 0.5);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
