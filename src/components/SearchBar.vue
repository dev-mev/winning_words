<template>
  <div>
    <form @submit.prevent="submitLetters" class="search-form">
      <div>
        <input
          v-model="lettersInput"
          type="text"
          placeholder="  Your letters"
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

    <SearchResults :words="words"/>
  </div>
</template>

<script>
import SearchResults from "@/components/SearchResults.vue";
import { getWords } from "@/services/api/returnWords";

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
      words: []
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
  margin-bottom: .5rem;
  background-color: #A29DB2;
  border: none;
  border-radius: .25rem;
  font-size: 16px;
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

.sub-input {
  padding-left: .75rem;
}

.exclude-letters {
  margin-left: .5rem;
}

button {
  float: right;
  height: 2rem;
  width: 5rem;
  background-color: #3DB57F;
}

button:hover {
  opacity: .75;
}
</style>
