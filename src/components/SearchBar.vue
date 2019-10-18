<template>
  <form @submit.prevent="submitLetters" class="search-form">
    <label for="lettersInput">Enter your letters </label>
    <input v-model="letters" id="lettersInput" required>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import SearchResults from "@/components/SearchResults.vue"

export default {
  name: 'SearchBar',
  data() {
    return {
      lettersInput: []
    }
  },
    submitLetters() {
      console.log("Letters: " + lettersInput);
    },
}
</script>