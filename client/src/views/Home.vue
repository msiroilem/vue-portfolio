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
        :github="project.github"
        :description="project.description"
        @projectLink="projectLink"
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
        github: 'https://github.com/msiroilem/Movie-Trivia',
        image: 'movietrivia.png'
      },
      {
        id: 2,
        name: 'Movie Database',
        description:
          'A movie database built using the MERN stack (MongoDB, Express, React and Node)',
        github: 'https://github.com/msiroilem/movieDatabase',
        image: 'moviedb.png'
      },
      {
        id: 3,
        name: 'Reviewr',
        description:
          'A music album review site created with the PERN stack (PostgreSQL, Express, React and Node)',
        github: 'https://github.com/msiroilem/Reviewr',
        image: 'reviewr.png'
      },
      {
        id: 4,
        name: 'BingeWatch',
        description:
          'A TV show review site built with Vue, Express, PostgreSQL and Node',
        github: 'https://github.com/msiroilem/bingewatch',
        image: 'bingewatch.png'
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
        link: '',
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
