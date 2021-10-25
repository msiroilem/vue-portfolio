<template>
  <div class="card">
    <div class="image-wrapper">
      <img :src="image" :alt="name" />
    </div>
    <div class="info-wrapper flex-col">
      <h3>{{ name }}</h3>
      <a :href="deploy" target="_blank">Live Demo</a>
      <a :href="github" target="_blank">GitHub</a>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: ['name', 'image', 'id', 'deploy', 'github', 'description']
}
</script>

<style scoped>
.card {
  width: 200px;
  border-radius: 4px;
  background-color: cornflowerblue;
  cursor: pointer;
  transition: all 0.2s;
  margin: 10px;
  text-align: center;
  color: #000000;
  text-decoration: none;
}
.card a {
  margin: 10px;
  color: white;
}
.card a:visited {
  color: #000000;
  text-decoration: none;
}
.card:hover {
  opacity: 0.8;
}
.card .image-wrapper {
  width: auto;
}
</style>
