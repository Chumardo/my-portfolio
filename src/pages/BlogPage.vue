<template>
  <TheContainer>
    <TheHeader title="My Blogs" filename="blog.png" />
    <div class="blogs">
      <BlogCard />

      <BlogCard />

      <BlogCard />
    </div>
  </TheContainer>
</template>

<script>
import TheContainer from "../components/TheContainer.vue";
import TheHeader from "../components/TheHeader.vue";
import BlogCard from "../components/BlogCard.vue";

export default {
  components: {
    TheContainer,
    TheHeader,
    BlogCard,
  },
};
</script>

<style scoped>
.blogs {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 5%;
}
</style>
