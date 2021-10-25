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
        :id="project.id"
        :github="project.github"
        @projectLink="projectLink"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue'
export default {
  name: 'Home',
  components: { ProjectCard },
  data: () => ({
    projects: [
      {
        id: 1,
        name: 'Movie Trivia',
        github: 'https://github.com/msiroilem/Movie-Trivia',
        image: ''
      },
      {
        id: 2,
        name: 'Movie Database',
        github: 'https://github.com/msiroilem/movieDatabase',
        image: ''
      },
      {
        id: 3,
        name: 'Reviewr',
        github: 'https://github.com/msiroilem/Reviewr',
        image: ''
      },
      {
        id: 4,
        name: 'BingeWatch',
        github: 'https://github.com/msiroilem/bingewatch',
        image: ''
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
