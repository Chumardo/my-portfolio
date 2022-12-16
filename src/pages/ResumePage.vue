<template>
  <TheContainer>
    <TheHeader title="My Resume" filename="resume.png" />
    <div class="exp-edu">
      <div class="experience">
        <h3>EXPERIENCE</h3>
      </div>
      <div class="education">
        <h3>EDUCATION</h3>
      </div>
    </div>
  </TheContainer>
</template>

<script>
import TheContainer from "../components/TheContainer.vue";
import TheHeader from "../components/TheHeader.vue";

export default {
  components: {
    TheContainer,
    TheHeader,
  },
};
</script>

<style scoped>
.exp-edu {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 5%;
}

.experience,
.education {
  text-align: center;
}

.exp-edu h3 {
  display: inline-block;
  color: #e1e1e1;
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  letter-spacing: 0.5px;
  border-left: 3px solid;
  border-bottom: 3px solid;
  border-right: 3px solid;
  border-image: linear-gradient(
    to top,
    rgb(23, 122, 212),
    25%,
    rgba(0, 0, 0, 0) 25%
  );
  border-image-slice: 1;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 3px;
}
</style>
