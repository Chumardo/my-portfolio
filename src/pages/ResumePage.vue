<template>
  <TheContainer>
    <TheHeader title="My Resume" filename="resume.png" />
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
