<template>
  <div class="yellow">
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
    <ProjectInfo
      v-for="project in projects"
      :key="project.id"
      :title="project.title"
      :description="project.description"
      :technologies="project.technologies"
    />
  </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue'
import PContactInfo from '../components/PContactInfo.vue'
// import ProjectInfo from '../components/ProjectInfo.vue'

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
          'A music album review site created with the PERN stack (PostgreSQL, Express, React and Node) You can try out the site with username: demo and password: reviewr-demo',
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
      },
      {
        id: 5,
        name: 'Vue RAWG',
        description: 'A video game database built with Vue',
        deploy: 'https://vue-rawg.netlify.app',
        github: 'https://github.com/msiroilem/Vuedeo',
        image:
          'https://res.cloudinary.com/dgrrqoexg/image/upload/c_scale,w_200/v1635208496/Screen_Shot_2021-10-25_at_8.34.47_PM_g935lj.png'
      },
      {
        id: 6,
        name: 'Rock Paper Scissors',
        description: "It's rock, paper, scissors",
        deploy: 'https://twj.vercel.app/',
        github: 'https://github.com/msiroilem/rockpaperscissors',
        image:
          'https://res.cloudinary.com/dgrrqoexg/image/upload/c_scale,w_200/v1635651406/Screen_Shot_2021-10-30_at_11.36.21_PM_ykfi2x.png'
      },
      {
        id: 7,
        name: 'OpenBook',
        description: 'A posts and comments site built with Vue and Flask',
        deploy: 'https://boring-villani-28dc5e.netlify.app/',
        github: 'https://github.com/msiroilem/OpenBook',
        image:
          'https://res.cloudinary.com/dgrrqoexg/image/upload/c_scale,w_200/v1635210349/Screen_Shot_2021-10-25_at_9.05.23_PM_cidijd.png'
      },
      {
        id: 8,
        name: 'Tic Tac Toe',
        description: 'Tic Tac Toe',
        deploy: 'https://twj-tictactoe.vercel.app/',
        github: 'https://github.com/msiroilem/tictactoe',
        image:
          'https://res.cloudinary.com/dgrrqoexg/image/upload/c_scale,w_200/v1635705998/Screen_Shot_2021-10-31_at_2.46.20_PM_kslx0e.png'
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
          'https://drive.google.com/file/d/10uE19wfYURTThGsVS4ELJhcNI5czZ9Wn/view?usp=sharing',
        icon: 'mdi-file-download'
      }
    ]
  }),

  mounted() {},
  methods: {}
}
</script>

<style scoped>
div {
  align-content: center;
}
h1 {
  text-align: center;
}
.content {
  display: flex;
  flex-wrap: wrap;
  justify-self: stretch;
  display: grid;
  grid-column-start: 2;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
header {
  text-align: center;
}
.yellow {
  background-color: #e4f872;
}
</style>
