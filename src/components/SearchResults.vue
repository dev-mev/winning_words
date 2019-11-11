<template>
  <div class="search-results-container">
    <SearchWord
      v-for="word in words"
      :key="word.word"
      :word="word.word"
    />
  </div>
</template>

<script>
import SearchWord from "./SearchWord.vue";

export default {
  name: "SearchResults",
  props: {
    words: Array
  },
  components: {
    SearchWord
  }
};
</script>

<style scoped>
.search-results-container {
  display: flex;
  flex-direction: column;
}
</style>
