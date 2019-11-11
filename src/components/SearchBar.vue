<template>
  <div>
    <form @submit.prevent="submitLetters" class="search-form">
      <div>
        <input
          v-model="lettersInput"
          type="text"
          placeholder="Your letters"
          aria-label="Optional letters">
      </div>

      <div class="sub-input-container">
        <input
          v-model="includeLetters"
          class="sub-input"
          type="text"
          placeholder="Must include"
          aria-label="Must include">
        <input
          v-model="excludeLetters"
          class="exclude-letters sub-input"
          type="text"
          placeholder="Must exclude"
          aria-label="Must exclude">
      </div>

      <button type="submit">Submit</button>
    </form>

    <div
      class="no-words"
      v-if="words === null"
    >
    </div>

    <SearchResults
      :words="words"
      v-else-if="words.length > 1"
    />

    <p
      class="no-words"
      v-else-if="words.length < 1"
    >
      No matching words.
    </p>

  </div>
</template>

<script>
import SearchResults from "./SearchResults.vue";
import { getWords } from "../services/words";

export default {
  name: "SearchBar",
  components: {
    SearchResults
  },
  data() {
    return {
      lettersInput: "",
      excludeLetters: "",
      includeLetters: "",
      words: null
    };
  },
  methods: {
    submitLetters() {
      const userLetters = this.prepareLetters(this.lettersInput);
      const exclude = this.prepareLetters(this.excludeLetters);
      const include = this.prepareLetters(this.includeLetters);
      this.words = getWords(userLetters, exclude, include);
    },
    prepareLetters(letters) {
      return letters.toUpperCase().replace(/\s/g, "").split("");
    }
  }
};
</script>

<style scoped>
.search-form {
  text-align: center;
  color: white;
  margin-bottom: 2.5rem;
}

input[type="text"] {
  height: 2.75rem;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin-bottom: .5rem;
  background-color: #A29DB2;
  border: none;
  border-radius: .25rem;
  font-size: 16px;
  padding-left: .75rem;
}

::-webkit-input-placeholder {
  color: #373055;
}

:-ms-input-placeholder {
  color: #373055;
}

::placeholder {
  color: #373055;
}

.sub-input-container {
  display: flex;
  justify-content: space-between;
}

.exclude-letters {
  margin-left: .5rem;
}

button {
  float: right;
  height: 2.5rem;
  width: 5rem;
  font-size: 16px;
  border-radius: .25rem;
  background-color: #3DB57F;
  margin: .25rem;
}

button:hover {
  opacity: .75;
}

.no-words {
  color: white;
}
</style>
