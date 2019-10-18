<template>
  <div class="search-results-container">
      <div v-for="word in words" :key="word">
      <div class="search-result">{{ word }}</div>
      <div v-for="definition in definitions" :key="definition">
          <p>{{ definition }}</p>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'SearchResults',
  props: ["lettersInput"],
  data() {
    return {
      words: [],
      definitions: []
    }
  },
  methods: {
    submitLetters() {
      console.log("Letters: " + lettersInput);
      let userLetters = this.lettersInput.toUpperCase().split("");
      this.getWords(userLetters);
    },
    getWords(letters) {
      this.words = wordsApi.getWords(letters)
    },
    accessDefinitions(searchWord) {
      definitionsApi.getDefinitions(searchWord)
        .then(definition => {
          console.log(definition);
          let definitionObject = {"word": searchWord, "definition": definition};
          this.definitions.push(definitionObject);
        })
        .catch(error => console.error(error))
    }
  }
}
</script>