<template>
  <div class="search-container">
    <SearchBar />
    <SearchResults />
  </div>
</template>

<script>
import definitionsApi from "@/services/api/definitionsApi"
import wordsApi from "@/services/api/wordsApi"
import SearchResults from "@/components/SearchResults.vue"
import SearchBar from "@/components/SearchBar.vue"

export default {
  name: "Search",
  components: {
    SearchResults,
    SearchBar
  }
}
</script>

<style scoped>
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

.search-result-button {
  width: 100%;
  border: none;
  padding: 0;
  background-color: transparent;
}

#lettersInput {

}

.search-form {
  text-align: center;
  color: white;
  margin-bottom: 1rem;
}

.definition {
  background-color: #443A66;
  padding: .5rem;
  color: #A29DB2;
  margin: 1px;
}
</style>
