<template>
  <TheContainer>
    <TheHeader title="My Blogs" filename="blog.png" />
    <div class="blogs">
      <BlogCard :blog="blog" v-for="(blog, index) in blogPosts" :key="index" />
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
  data() {
    return {
      blogPosts: [
        {
          title: "Title one",
          cover:
            "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
          date: "April 2, 1998",
        },
        {
          title: "Title two",
          cover:
            "https://upload.wikimedia.org/wikipedia/commons/e/ee/Chain_link_icon.png",
          date: "May 2, 1998",
        },
        {
          title: "Title three",
          cover:
            "data:image/png;base64,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",
          date: "June 2, 1998",
        },
      ],
    };
  },
};
</script>

<style scoped>
.blogs {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 5%;
  gap: 7.5%;
}
</style>
