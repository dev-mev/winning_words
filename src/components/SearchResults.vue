<template>
  <div class="search-results-container">
    <button
      class="search-result-button"
      v-for="word in words"
      :key="word"
      v-bind:class="{
        'active-word': activeWord === word
      }"
      v-on:click="accessDefinitions(word)"
    >
      <div class="search-result">{{ word }}</div>
        <div v-show="activeWord === word">
          <p class="definition">{{ currentDefinition }}</p>
        </div>
    </button>
  </div>
</template>

<script>
import definitionsApi from "@/services/api/definitionsApi";

export default {
  name: "SearchResults",
  props: {
    words: Array
  },
  data() {
    return {
      activeWord: "",
      currentDefinition: ""
    }
  },
  methods: {
    accessDefinitions(searchWord) {
      this.activeWord = searchWord

      definitionsApi.getDefinitions(searchWord)
        .then(definition => {
          console.log(definition);
          // let definitionObject = {"word": searchWord, "definition": definition};
          this.currentDefinition = definition;
        })
        .catch(error => console.error(error))
    }
  }
}
</script>

<style scoped>
.search-result-button {
  width: 100%;
  border: none;
  padding: 0;
  background-color: transparent;
}

.search-result {
  background-color: #4E4473;
  color: #A29DB2;
  font-size: 20px;
  height: 35px;
  margin: 1px 0;
  text-align: center;
  padding-top: 10px;
}

.search-result:focus {
  outline-color: #3DB57F;
}

.definition {
  background-color: #443A66;
  padding: .5rem;
  color: #A29DB2;
  margin: 1px;
  text-align: left;
}
</style>