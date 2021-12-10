<template>
  <nav>
    <router-link to="/" name="Home">TWJ</router-link>
    <router-link to="/about" name="About">About </router-link>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped>
nav {
  background: #e4f872;
  padding: 1em;
  text-align: center;
  color: #ffffff;
}
nav a {
  margin: 1em;
  color: black;
  text-decoration: none;
  font-weight: 800;
  justify-content: space-between;
}
</style>
