<template>
  <div>
    <form @submit.prevent="submitLetters" class="search-form">
      <label for="lettersInput">Enter your letters </label>
      <input v-model="lettersInput" id="lettersInput" required>
      <button type="submit">Submit</button>
    </form>

    <SearchResults :words="words"/>
  </div>
</template>

<script>
import SearchResults from "@/components/SearchResults.vue";
import wordsApi from "@/services/api/wordsApi";

export default {
  name: 'SearchBar',
  components: {
    SearchResults
  },
  data() {
    return {
      lettersInput: "",
      words: []
    }
  },
  methods: {
    submitLetters() {
      console.log("Letters: " + this.lettersInput);
      let userLetters = this.lettersInput.toUpperCase().split("");
      this.getWords(userLetters);
    },
    getWords(letters) {
      this.words = wordsApi.getWords(letters)
    },
  }
}
</script>

<style scoped>
.search-form {
  text-align: center;
  color: white;
  margin-bottom: 1rem;
}
</style>
