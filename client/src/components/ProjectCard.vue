<template>
  <div class="card" @click="projectLink()">
    <div class="image-wrapper">
      <img :src="image" :alt="name" />
    </div>
    <div class="info-wrapper flex-col">
      <a :href="github"
        ><h3>{{ name }}</h3></a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: ['name', 'image', 'id', 'github']
}
</script>

<style scoped>
.card {
  width: 200px;
  border-radius: 4px;
  background-color: #000000;
  cursor: pointer;
  transition: all 0.2s;
  margin: 10px;
  text-align: center;
  color: #ffffff;
  text-decoration: none;
}
.card a:visited {
  color: #ffffff;
  text-decoration: none;
}
.card:hover {
  opacity: 0.8;
}
.card .image-wrapper {
  width: auto;
}
</style>
