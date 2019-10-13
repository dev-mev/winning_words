<template>
  <div class="search-container">

    <h1>Winning Words</h1>

    <form @submit.prevent="submitLetters">
      <label for="lettersInput">Enter your letters </label>
      <input v-model="lettersInput" id="lettersInput" required>
      <button type="submit">Submit</button>
    </form>

    <ul>
      <li v-for="word in words" :key="word">
        <p>{{ word }}</p>
      </li>
    </ul>


    <ul>
      <li v-for="definition in definitions" :key="word.hom">
        <p>{{ word.shortdef[0] }}</p>
      </li>
    </ul>

  </div>
</template>

<script>
import definitionsApi from "@/services/api/definitionsApi"
import wordsApi from "@/services/api/wordsApi"

export default {
  name: 'Search',
  data() {
    return {
      words: []
    }
  },
  methods: {
    getWords(letters) {
      this.words = wordsApi.getWords(letters);
      this.accessDefinitions();
    },
    submitLetters() {
      let userLetters = this.lettersInput.split("");
      this.getWords(userLetters);
    },
    accessDefinitions(word) {
      definitionsApi.getDefinitions(word)
        .then(definitions => {
          console.log(definitions);
        })
        .catch(error => error.log(error))
    }
  }
}
</script>

