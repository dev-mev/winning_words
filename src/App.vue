<template>
  <div id="app">
    <TheHeader />
    <Search />
  </div>
</template>

<script>
import Search from "./components/SearchContainer.vue";
import TheHeader from "./components/TheHeader.vue";

export default {
  name: "app",
  components: {
    Search,
    TheHeader
  }
};
</script>

<style>
body {
  background-color: #373055;
  margin: 0;
  font-family: sans-serif;
}
</style>
