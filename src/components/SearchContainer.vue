<template>
  <div class="search-container">
    <SearchBar />
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";

export default {
  name: "Search",
  components: {
    SearchBar
  }
};
</script>

<style>
  .search-container {
    max-width: 500px;
    margin: 0 auto;
  }
</style>
