<template>
  <TheContainer>
    <TheHeader class="header" title="Contact Me">
      <ContactIcon :color="`#177ad4`"> </ContactIcon>
    </TheHeader>
    <div class="contact">
      <div class="talk">
        <h3>LET'S TALK</h3>
        <form @submit.prevent="sendMessage">
          <div class="form">
            <div class="first-row">
              <input
                :class="{ active: isActive, 'text-danger': nameError }"
                type="text"
                placeholder="Name"
                id="name"
                v-model="contact_name"
              />
              <input
                :class="{ active: isActive, 'text-danger': mailError }"
                type="email"
                id="email"
                placeholder="Email"
                v-model="contact_email"
              />
            </div>

            <div class="second-row">
              <textarea
                :class="{ active: isActive, 'text-danger': messageError }"
                id="message"
                cols="50"
                rows="5"
                v-model="contact_message"
              ></textarea>
              <p v-show="isActive === false" class="error-message">
                Please fill fields
              </p>
              <p v-show="messageSent === true" class="message-sent">
                Message has been sent successfuly.
              </p>
            </div>

            <div class="third-row">
              <div class="btn"><button>SEND MESSAGE</button></div>
            </div>
          </div>
        </form>
      </div>
      <div class="contact-info">
        <div class="mail">
          <img src="@/assets/img/email.png" alt="email-icon" />
          <h3>dachi.giorgadze98@gmail.com</h3>
        </div>
        <div class="location">
          <img src="@/assets/img/location.png" alt="location-icon" />
          <h3>Rustavi, Modebadze Street 22, Georgia</h3>
        </div>
        <div class="phone">
          <img src="@/assets/img/phone.png" alt="phone-icon" />
          <h3>+995 593 476 776</h3>
        </div>
      </div>
    </div>
  </TheContainer>
</template>

<script>
import TheContainer from "../components/TheContainer.vue";
import TheHeader from "../components/TheHeader.vue";
import ContactIcon from "../components/Icons/ContactIcon.vue";
import emailjs from "emailjs-com";

export default {
  data() {
    return {
      contact_name: "",
      contact_email: "",
      contact_message: "",
      isActive: true,
      nameError: false,
      mailError: false,
      messageError: false,
      messageSent: false,
    };
  },
  components: {
    TheContainer,
    TheHeader,
    ContactIcon,
  },
  watch: {
    contact_name(value) {
      if (value.length > 0) {
        this.nameError = false;
        if (this.contact_email.length > 0 && this.contact_message.length > 0) {
          this.isActive = true;
        }
      }
    },
    contact_email(value) {
      if (value.length > 0) {
        this.mailError = false;
        if (this.contact_name.length > 0 && this.contact_message.length > 0) {
          this.isActive = true;
        }
      }
    },
    contact_message(value) {
      if (value.length > 0) {
        this.messageError = false;
        if (this.contact_email.length > 0 && this.contact_name.length > 0) {
          this.isActive = true;
        }
      }
    },
  },
  methods: {
    sendMessage() {
      this.validateForm();
    },
    validateForm() {
      if (this.contact_name.length === 0) {
        this.nameError = true;
        this.isActive = false;
      }
      if (this.contact_email.length === 0) {
        this.mailError = true;
        this.isActive = false;
      }
      if (this.contact_message.length === 0) {
        this.messageError = true;
        this.isActive = false;
      } else {
        const templateparams = {
          name: this.contact_name,
          message: this.contact_message,
          reply_to: this.contact_email,
        };
        emailjs.send(
          "service_svc9j0h",
          "template_te4layr",
          templateparams,
          "nzZ4NnUEr-5Zs6yXa"
        );
        this.isActive = true;
        this.nameError = false;
        this.mailError = false;
        this.messageError = false;
        this.messageSent = true;
        this.contact_name = "";
        this.contact_email = "";
        this.contact_message = "";
      }
    },
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

.contact-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 15%;
  color: #00a3e1;
  margin-bottom: 10%;
}

textarea {
  resize: vertical;
}

.btn {
  transform: translate(30%, 25%);
}

button {
  display: block;
  cursor: pointer;
  border: 2px solid #ffffff;
  padding: 10px 20px;
  text-transform: uppercase;
  background: none;
  font-size: 14px;
  font-weight: 500;
  position: relative;
  line-height: 100%;
  letter-spacing: 1px;
  border-color: #00a3e1 !important;
  position: relative;
  transition: 1s all ease;
  overflow: hidden;
  color: white;
}

button::before {
  content: "";
  position: absolute;
  background: #00a3e1;
  width: 0;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  transition: all 0.6s ease;
}

button:hover::before {
  width: 100%;
}

button:hover {
  color: black;
}

input {
  padding: 5px;
  border: 3px solid #00a3e1;
  border-radius: 4px;
}

.text-danger {
  border: 2px solid #ff0000;
  border-radius: 2px;
}

.error-message {
  color: red;
}

.message-sent {
  padding-top: 5%;
  color: #00a3e1;
}

.header {
  z-index: 1;
}
</style>
