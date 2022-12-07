<template>
  <div class="container">
    <div class="page-header">
      <h1>About Me</h1>
      <span><img src="@/assets/img/about.png" alt="About Icon" /></span>
    </div>

    <div class="info">
      <div class="about">
        <h2>Web Developer</h2>
        <p>
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
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");
.container {
  background-color: rgba(44, 45, 47, 255);
  width: 100%;
  padding-left: 17%;
  padding-right: 17%;
  padding-top: 2%;
}

.page-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-style: dashed;
  font-size: 20px;
  border-bottom-width: thin;
  border-bottom-color: rgba(255, 255, 255, 0.5);
}

img {
  width: 40px;
  padding-bottom: 1%;
}

h1 {
  color: rgb(23, 122, 212);
  padding-bottom: 1%;
}

.info {
  display: grid;
  grid-template-columns: 2fr 1fr;
  color: rgb(255, 255, 255);
  padding-top: 5%;
}

.info p {
  font-size: 14px;
  color: #e1e1e1;
  font-family: "Roboto", sans-serif;
}

.about {
  width: 90%;
}
</style>
