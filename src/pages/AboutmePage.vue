<template>
  <TheContainer>
    <TheHeader title="About Me">
      <AboutIcon :color="`#177ad4`"> </AboutIcon>
    </TheHeader>
    <div class="info">
      <div class="about">
        <h2>Web Developer</h2>
        <p class="about-info">
          Dolor reprehenderit aut repudiandae maiores recusandae. Consequatur
          dolor nisi labore commodi ipsa? Excepturi velit laboriosam at
          voluptatibus cupiditate est vel. Dolorem praesentium itaque fugiat
          placeat quas consequatur? Obcaecati natus rerum Consectetur
          consectetur nesciunt nesciunt blanditiis amet? Quod quis unde aliquid
          excepturi laudantium? Illo architecto aliquam velit illo magnam neque
          perferendis sint Incidunt eius ipsa inventore labore eos velit. Minus
          hic magni reiciendis necessitatibus ex Quidem officia deleniti
          accusamus obcaecati dolores. Porro culpa quibusdam impedit porro
          praesentium excepturi. Alias ab consequatur?
        </p>
      </div>
      <div class="personal-info">
        <h2>Personal Information</h2>
        <div class="fields">
          <p class="field">Name : <span>Dachi Giorgadze</span></p>
          <p class="field">Age : <span>24 Years</span></p>
          <p class="field">Residance : <span>Rustavi, Georgia</span></p>
          <p class="field">Address : <span>Modebadze Street 22/24</span></p>
          <p class="field">Email : <span>dachi.giorgadze98@gmail.com</span></p>
          <p class="field">Phone : <span>(+995) 593 476 776</span></p>
        </div>
      </div>
    </div>
  </TheContainer>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheContainer from "../components/TheContainer.vue";
import AboutIcon from "../components/Icons/AboutIcon.vue";
export default {
  components: {
    TheHeader,
    TheContainer,
    AboutIcon,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");

.info {
  display: grid;
  grid-template-columns: 1.9fr 1.1fr;
  color: rgb(255, 255, 255);
  padding-top: 5%;
}

.info p {
  color: #e1e1e1;
  font-family: "Roboto", sans-serif;
}

.info h2 {
  padding-bottom: 3rem;
}

.about {
  width: 90%;
}

.personal-info .fields .field {
  color: rgb(255, 255, 255);
  font-weight: 700;
}

.fields {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: left;
}

.fields p {
  margin-bottom: 5%;
}

.field span {
  color: rgb(225, 225, 225);
  font-weight: 400;
  font-size: 16px;
}
</style>
