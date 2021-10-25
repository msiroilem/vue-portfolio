<template>
  <div>
    <header>
      <h1>Projects</h1>
    </header>
    <div class="content">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :name="project.name"
        :image="project.image"
        :deploy="project.deploy"
        :github="project.github"
        :description="project.description"
      />
    </div>
    <template v-for="(contact, i) in contactLinks">
      <v-flex sm6 md4 xs12 :key="i">
        <PContactInfo :contact="contact" />
      </v-flex>
    </template>
  </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue'
import PContactInfo from '../components/PContactInfo.vue'
export default {
  name: 'Home',
  components: { ProjectCard, PContactInfo },
  data: () => ({
    projects: [
      {
        id: 1,
        name: 'Movie Trivia',
        description:
          'A multiple choice movie trivia game built with HTML, CSS and vanilla JavaScript',
        deploy: 'https://twj.surge.sh',
        github: 'https://github.com/msiroilem/Movie-Trivia',
        image:
          'https://res.cloudinary.com/dgrrqoexg/image/upload/c_scale,w_200/v1635195021/movietrivia_mqddlo.png'
      },
      {
        id: 2,
        name: 'Movie Database',
        description:
          'A movie database built using the MERN stack (MongoDB, Express, React and Node)',
        deploy: 'https://peaceful-coast-33066.herokuapp.com/',
        github: 'https://github.com/msiroilem/movieDatabase',
        image:
          'https://res.cloudinary.com/dgrrqoexg/image/upload/c_scale,w_200/v1635195065/moviedb_cjlxyy.png'
      },
      {
        id: 3,
        name: 'Reviewr',
        description:
          'A music album review site created with the PERN stack (PostgreSQL, Express, React and Node)',
        deploy: 'https://reviewrrr.herokuapp.com/',
        github: 'https://github.com/msiroilem/Reviewr',
        image:
          'https://res.cloudinary.com/dgrrqoexg/image/upload/c_scale,w_200/v1635195094/reviewr_akl8ps.png'
      },
      {
        id: 4,
        name: 'BingeWatch',
        description:
          'A TV show review site built with Vue, Express, PostgreSQL and Node',
        deploy: 'https://bingewatched.herokuapp.com/',
        github: 'https://github.com/msiroilem/bingewatch',
        image:
          'https://res.cloudinary.com/dgrrqoexg/image/upload/c_scale,w_200/v1635195118/bingewatch_sqvh6j.png'
      }
    ],
    contactLinks: [
      {
        name: 'Email',
        value: 'twjones86@gmail.com',
        link: 'mailto:twjones86@gmail.com',
        icon: 'mdi-email'
      },
      {
        name: 'LinkedIn',
        value: 'Tyler Jones',
        link: 'https://www.linkedin.com/in/tylerwadejones/',
        icon: 'mdi-linkedin'
      },

      {
        name: 'Github',
        value: 'msiroilem',
        link: 'https://github.com/msiroilem/',
        icon: 'mdi-github'
      },
      {
        name: 'Resume',
        value: 'Tyler Jones',
        link:
          'https://drive.google.com/file/d/1t3aitiBFEdjpcNqQCTHfT2kXbK29BOQ0/view?usp=sharing',
        icon: 'mdi-ice-cream'
      }
    ]
  }),

  mounted() {},
  methods: {}
}
</script>

<style scoped>
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
header {
  text-align: center;
}
</style>
