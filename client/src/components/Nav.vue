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
  justify-content: space-between;
}
</style>
