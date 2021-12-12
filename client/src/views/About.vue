<template>
  <div>
    <div class="about-wrapper">
      <div class="aboutBlock">
        <div class="myRow">
          <h1>
            Hi, I'm Tyler.
          </h1>
        </div>
        <div class="myRow">
          <h2>Texan turned New Yorker.</h2>
        </div>
        <div class="myRow">
          <h3>Postal Worker turned Developer.</h3>
        </div>
        <div class="bio">
          I'm Tyler Jones, a software engineer with a background in customer
          service. I became interested in coding as a result of my time working
          as a postal employee and the detail oriented tasks that demanded from
          me. I'm passionate about creating applications that everyone can
          benefit from using and hope to someday be working with a team of
          likeminded individuals.
        </div>
        <div class="okay">Here are a few projects I've worked on recently.</div>
      </div>
      <div class="aboutBlock something">
        <img class="tylerImage" src="https://i.imgur.com/aPqEWC9.jpeg" />
      </div>
    </div>
    <div class="projectRow">
      <div class="aboutBlock">
        <img
          class="projectImage"
          src="https://res.cloudinary.com/dgrrqoexg/image/upload/c_scale,w_400/v1635195094/reviewr_akl8ps.png"
        />
      </div>
      <div class="aboutBlock">
        <div class="projectInfo">
          <h1 class="p1">Reviewr</h1>
          <p class="p2">
            A music album review site created with the PERN stack.
          </p>
          <h4 class="p3">PostgresSQL / Express / React / Node</h4>
          <strong class="demo"
            >You can sample the site with: username: demo password:
            reviewr-demo</strong
          >
        </div>
      </div>
    </div>
    <div class="projectRow">
      <div class="aboutBlock">
        <h1 class="p1">Vuedeo</h1>
        <p class="p2">A video game database.</p>
        <h4 class="p3">Vue</h4>
      </div>
      <div class="aboutBlock">
        <div class="projectInfo">
          <img
            class="projectImage"
            src="https://res.cloudinary.com/dgrrqoexg/image/upload/c_scale,w_400/v1635208496/Screen_Shot_2021-10-25_at_8.34.47_PM_g935lj.png"
          />
        </div>
      </div>
    </div>
    <div class="projectRow">
      <div class="aboutBlock">
        <img
          class="projectImage"
          src="https://res.cloudinary.com/dgrrqoexg/image/upload/c_scale,w_400/v1635195021/movietrivia_mqddlo.png"
        />
      </div>
      <div class="aboutBlock">
        <div class="projectInfo">
          <h1 class="p1">Movie Trivia</h1>
          <p class="p2">
            A multiple choice movie trivia game.
          </p>
          <h4 class="p3">HTML / CSS / Vanilla JavaScript</h4>
        </div>
      </div>
    </div>
    <div class="projectRow">
      <div class="aboutBlock">
        <img
          class="projectImage"
          src="https://res.cloudinary.com/dgrrqoexg/image/upload/c_scale,w_400/v1635195118/bingewatch_sqvh6j.png"
        />
      </div>
      <div class="aboutBlock">
        <div class="projectInfo">
          <h1 class="p1">BingeWatch</h1>
          <p class="p2">
            A TV show review site.
          </p>
          <h4 class="p3">PostgresSQL / Express / Vue / Node</h4>
        </div>
      </div>
    </div>
    <div>
      <template v-for="(contact, i) in contactLinks">
        <v-flex sm6 md4 xs12 :key="i">
          <PContactInfo :contact="contact" />
        </v-flex>
      </template>
    </div>
    <div class="lang1">
      Languages
      <p class="lang2">JavaScript / CSS / Python / HTML / SQL</p>
    </div>
    <div class="frameworks">
      Frameworks and Libraries
      <p class="frameworks2">React/Redux + Vue/Vuex + Express</p>
    </div>
    <div class="databases">
      Databases
      <p class="databases2">
        MongoDB/Mongoose / PostgreSQL/Sequelize / Flask/SQLAlchemy
      </p>
    </div>
    <div class="tools">
      Tools
      <p class="tools2">
        Node / Git / GitHub / Heroku / Vercel / Surge / Netlify / NPM / VSCode
      </p>
    </div>
  </div>
</template>

<script>
import PContactInfo from '../components/PContactInfo.vue'
export default {
  name: 'About',
  components: PContactInfo
}
</script>

<style scoped>
.about-wrapper {
  margin: 0px;
  text-align: center;

  height: fit-content;
  margin-top: 0px;
  display: block;
  display: flex;
  justify-content: center;
}

.aboutBlock {
  width: 500px;
  height: 100%;
  padding: 20px;
  /* border: 1px solid black; */
  overflow: hidden;
}
body {
  background-color: #e4f872;
}
.projectImage {
  border-radius: 30px;
}
.projectRow {
  display: flex;
  justify-content: center;
  /* border: 1px solid black; */
  /* background-color: #e4f872; */
}
.tylerImage {
  max-height: 500px;
  max-width: 500px;
  border-bottom-left-radius: 500px;
}
.myRow {
  padding: 16px 0px;
  text-align: left;
}
.bio {
  text-align: left;
  font-size: 18px;
}
.p1 {
  font-size: 59px;
}
.p2 {
  font-size: 41.4px;
}
.p3 {
  font-size: 23.8px;
  margin-top: 20px;
}
.okay {
  margin-top: 20px;
  font-size: 20px;
}
.demo {
  margin-top: 20px;
  font-size: 23px;
}
.test {
  background-color: blue;
}
.lang1 {
  margin-top: 30px;
  font-size: 40px;
  text-align: center;
}
.lang2 {
  font-size: 25px;
  margin-top: 20px;
}
.frameworks {
  margin-top: 30px;
  font-size: 40px;
  text-align: center;
}
.frameworks2 {
  margin-top: 20px;
  font-size: 25px;
}
.databases {
  margin-top: 30px;
  font-size: 40px;
  text-align: center;
}
.databases2 {
  margin-top: 20px;
  font-size: 25px;
}
.tools {
  margin-top: 30px;
  font-size: 40px;
  text-align: center;
}
.tools2 {
  margin-top: 20px;
  font-size: 25px;
}
</style>
