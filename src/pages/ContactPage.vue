<template>
  <TheContainer>
    <TheHeader title="Contact Me" filename="contact.png" />
    <div class="contact">
      <div class="talk">
        <h3>LET'S TALK</h3>
        <div class="form">
          <div class="first-row">
            <input type="text" placeholder="Name" id="name" />
            <input type="email" id="email" placeholder="Email" />
          </div>

          <div class="second-row">
            <textarea id="message" cols="50" rows="5"></textarea>
          </div>

          <div class="third-row">
            <button>SEND MESSAGE</button>
          </div>
        </div>
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
.talk h3 {
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

.contact {
  text-align: center;
  padding-top: 5%;
}

.form {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.first-row {
  display: flex;
  grid-column-start: 2;
  grid-column-end: 3;
  justify-content: space-between;
  margin-bottom: 5%;
  margin-top: 5%;
}

.second-row {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 3;
}

.third-row {
  grid-column-start: 2;
  grid-row-start: 4;
  padding-top: 5%;
}

textarea {
  resize: vertical;
}

button {
  cursor: pointer;
  border: 2px solid #ffffff;
  padding: 10px 20px;
  text-transform: uppercase;
  background-color: transparent;
  font-size: 14px;
  font-weight: 500;
  position: relative;
  line-height: 100%;
  letter-spacing: 1px;
  border-color: #00a3e1 !important;
  color: #00a3e1;
  overflow: hidden;
  position: relative;
}
</style>
