<template>
  <div class="page-header">
    <h1>{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style scoped>
.page-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-style: dashed;
  font-size: 20px;
  border-bottom-width: thin;
  border-bottom-color: rgba(255, 255, 255, 0.5);
  position: sticky;
  top: -1%;
  background-color: rgba(44, 45, 47, 255);
}

h1 {
  color: #177ad4;
  padding-top: 1%;
  padding-bottom: 1%;
}
</style>
