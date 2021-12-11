<template>
  <div id="app">
    <Nav />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
export default {
  name: 'App',

  components: {
    Nav
  },

  data: () => ({
    //
  })
}
</script>

<style>
main {
  background: #e4f872;
  height: 170vh;
  padding: 0px 20px;
}
</style>
