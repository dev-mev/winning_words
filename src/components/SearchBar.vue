<template>
  <div>
    <form @submit.prevent="submitLetters" class="search-form float-top">
      <div class="label-style">
        <input
        id="letters-input"
          v-model="lettersInput"
          type="text"
          aria-label="Optional letters">
        <label class="label-text" for="letters-input">Your letters</label>
      </div>

      <div class="sub-input-container">
        <div class="label-style">
          <input
            v-model="includeLetters"
            class="sub-input"
            type="text"
            aria-label="Must include">
          <label class="label-text">Must include</label>
        </div>
        <div class="label-style">
          <input
            v-model="excludeLetters"
            class="exclude-letters sub-input"
            type="text"
            aria-label="Must exclude">
          <label class="label-text">Must exclude</label>
        </div>
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
  height: 3.5rem;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #A29DB2;
  border: none;
  border-radius: .25rem;
  font-size: 16px;
  padding-left: .75rem;
  padding-top: 1rem;
}

.sub-input-container {
  display: flex;
  justify-content: space-between;
}

.sub-input-container div {
  width: 48%;
}

.no-words {
  color: white;
}

.label-style {
  position: relative;
  margin: 0px 0px 20px 0px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.label-text {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 10px;
  font-size: 16px;
  width: 100%;
  color: #373055;
  transition: 0.2s;
  z-index: 1;
}

/* float label*/
form.float-top input:empty + label
  {
  bottom: 100%;
  left: 10px;
  top: 5px;
  margin-bottom: -16px;
  font-size: 14px;
  line-height: 17px;
  color: #373055;
  text-align: left;
  padding: 0;
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
</style>
