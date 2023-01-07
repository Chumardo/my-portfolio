<template>
  <TheContainer>
    <TheHeader title="My Resume">
      <ResumeIcon :color="`#177ad4`"> </ResumeIcon>
    </TheHeader>
    <div class="exp-edu">
      <div class="experience">
        <h3>EXPERIENCE</h3>
        <div class="content-wrapper">
          <div class="info" v-for="(info, index) in experiences" :key="index">
            <h4>{{ info.title }}</h4>
            <h5>{{ info.location }}</h5>
            <p>{{ info.description }}</p>
          </div>
        </div>
      </div>

      <div class="education">
        <h3>EDUCATION</h3>
        <div class="content-wrapper">
          <div class="info" v-for="(info, index) in education" :key="index">
            <h4>{{ info.course }}</h4>
            <h5>{{ info.university }}</h5>
            <p>{{ info.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="coding-skills">
      <h3>CODING SKILLS</h3>
      <div class="skills-wrapper">
        <div class="skill-bar" v-for="(item, index) in skills" :key="index">
          <label for="skill">{{ item.skill }} </label>
          <progress id="skill" :value="item.percent" max="100"></progress>
        </div>
      </div>
    </div>
  </TheContainer>
</template>

<script>
import TheContainer from "../components/TheContainer.vue";
import TheHeader from "../components/TheHeader.vue";
import ResumeIcon from "../components/Icons/ResumeIcon.vue";

export default {
  components: {
    TheContainer,
    TheHeader,
    ResumeIcon,
  },
  data() {
    return {
      skills: [
        { skill: "HTML", percent: 100 },
        { skill: "CSS", percent: 80 },
        { skill: "Javascript", percent: 75 },
        { skill: "Vue.js", percent: 60 },
        { skill: "Python", percent: 95 },
        { skill: "Jinja", percent: 20 },
        { skill: "Flask", percent: 20 },
        { skill: "Django", percent: 40 },
        { skill: "Kivy", percent: 20 },
        { skill: "Pandas", percent: 50 },
        { skill: "SQLAlchemy", percent: 65 },
        { skill: "SQLite", percent: 75 },
        { skill: "POSTMAN", percent: 80 },
        { skill: "Selenium", percent: 70 },
        { skill: "OpenCV", percent: 30 },
        { skill: "Scikit Learn", percent: 25 },
        { skill: "TensorFlow", percent: 15 },
        { skill: "PyTorch", percent: 10 },
      ],
      experiences: [
        {
          title: "Sales manager",
          location: "WORCO, Tbilisi, Georgia",
          description:
            "Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima",
        },
        {
          title: "Accounting officer",
          location: "Bakery, Rustavi, Georgia",
          description:
            "Dolor id atque accusantium ut impedit odit provident soluta voluptatem Veritatis ipsam neque mollitia vero suscipit a laborum doloremque. Ipsa!",
        },
        {
          title: "QA Automation Intern",
          location: "a1qa, Remote, USA",
          description:
            "Consectetur pariatur fugiat ipsam aperiam maiores. Nisi in dignissimos debitis expedita asperiores delectus vitae corporis.",
        },
      ],
      education: [
        {
          course: "Business Administration, Management",
          university: "Ilia State University, Tbilisi, Georgia",
          description:
            "Consectetur mollitia amet inventore nisi sed. Provident veritatis exercitationem eum doloremque itaque expedita? Ex voluptatem nostrum numquam illum.",
        },
        {
          course:
            "International Accounting Standards and Tax System Study course certificate",
          university:
            "Georgian Federation of Professional Accountants and Auditors, Rustavi, Georgia",
          description:
            "Elit voluptatibus quas necessitatibus ullam tenetur provident voluptatibus. Ratione delectus lorem minus ipsa architecto. Saepe officiis sint adipisci.",
        },
      ],
    };
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
.education,
.coding-skills {
  text-align: center;
}

.exp-edu h3,
.coding-skills h3 {
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

.content-wrapper {
  display: flex;
  flex-direction: column;
  padding-top: 15%;
}

.info {
  text-align: left;
  width: 75%;
  padding-bottom: 15%;
}

.info h4 {
  color: rgb(255, 255, 255);
  font-size: 18px;
  letter-spacing: 1.5px;
}

.info h5 {
  color: rgb(23, 122, 212);
  font-size: 12px;
  letter-spacing: 1.5px;
}

.info p {
  color: rgb(190, 190, 190);
  font-size: 16px;
}

.coding-skills {
  padding-top: 5%;
  padding-bottom: 5%;
}

.skills-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 5%;
  text-align: start;
  width: 100%;
}

.skill-bar {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.skill-bar label {
  color: white;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1.5px;
}

progress {
  width: 90%;
  height: 10px;
  border: none;
  color: rgb(23, 122, 212);
  margin-top: 10px;
}

progress::-webkit-progress-value {
  background: rgb(23, 122, 212);
}

progress::-webkit-progress-bar {
  background: rgb(64, 65, 68);
}
</style>
