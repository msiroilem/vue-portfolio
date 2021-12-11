<template>
  <header>
    <router-link class="link" to="/" name="Home">TWJ</router-link>
    <div class="navOptions">
      <router-link to="/about" name="About">About</router-link>
      <div>
        Some other link
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped>
header {
  background: #e4f872;
  padding: 0px 46px;
  text-align: center;
  color: #ffffff;
  height: 134px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
header a {
  color: black;
  text-decoration: none;
  font-weight: 800;
  justify-content: space-between;
}

.link {
  font-size: 30px;
  margin-left: 20px;
}

.navOptions {
  margin-right: 20px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.navOptions div {
  font-weight: bold;
  margin-left: 1em;
}
</style>
