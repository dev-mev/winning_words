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
      <li v-for="definition in definitions" :key="word">
        <p>{{ definition }}</p>
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
      words: [],
      definitions: []
    }
  },
  methods: {
    getWords(letters) {
      this.words = wordsApi.getWords(letters)
      // this.accessDefinitions();
    },
    submitLetters() {
      let userLetters = this.lettersInput.toUpperCase().split("");
      this.getWords(userLetters);
    },
    accessDefinitions() {
      for (let word of this.words) {
        definitionsApi.getDefinitions(word)
          .then(definition => {
            console.log(definition[0].shortdef);
            this.definitions.push(definition[0].shortdef[0]);
          })
          .catch(error => console.error(error))
      }
    }
  }
}
</script>

