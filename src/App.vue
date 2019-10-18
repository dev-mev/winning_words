<template>
  <div id="app">
    <TheHeader />
    <Search />
  </div>
</template>

<script>
import Search from './components/SearchContainer.vue'
import TheHeader from "./components/TheHeader"

export default {
  name: 'app',
  components: {
    Search,
    TheHeader
  }
}
</script>

<style>
body {
  max-width: 500px;
  background-color: #373055;
  margin: 0 auto;
  font-family: sans-serif;
}
</style>