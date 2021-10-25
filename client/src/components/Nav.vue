<template>
  <nav>
    <router-link to="/" name="Home">Home</router-link>
    <router-link to="/about" name="About">About </router-link>
    <a href="https://github.com/msiroilem/" target="_blank">GitHub</a>
    <a href="https://linkedin.com/in/tylerwadejones" target="_blank"
      >LinkedIn</a
    >
    <a href="mailto:twjones86@gmail.com">Email</a>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped>
nav {
  background: #000000;
  padding: 1em;
  text-align: center;
  color: #ffffff;
}
nav a {
  margin: 1em;
  color: #ffffff;
  text-decoration: none;
  font-weight: 800;
}
</style>
