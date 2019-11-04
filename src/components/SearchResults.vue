<template>
  <div class="search-results-container">
    <button
      class="search-result-button"
      v-for="word in wordObjects"
      :key="word.word"
      v-bind:class="{
        'active-word': activeWord === word.word
      }"
      v-on:click="accessDefinitions(word)"
    >
      <div class="search-result">{{ word.word }}</div>
        <transition name="popover">
          <div class="definition-div" v-if="activeWord === word.word">
            <p class="definition">{{ def }}</p>
          </div>
        </transition>
    </button>
  </div>
</template>

<script>
import Vue from "vue";
import returnDefinitions from "@/services/api/returnDefinitions";

export default {
  name: "SearchResults",
  props: {
    words: Array
  },
  data() {
    return {
      activeWord: "",
      show: true,
      def: ""
    };
  },
  computed: {
    wordObjects() {
      return this.words;
    }
  },
  methods: {
    accessDefinitions(searchWord) {
      const self = this;
      this.activeWord = searchWord.word;

      if (searchWord.definition) {
        self.def = searchWord.definition;
      } else {
        returnDefinitions.getDefinitions(searchWord.word)
          .then((thisDefinition) => {
            searchWord.definition = thisDefinition;
            self.def = searchWord.definition;
          });
      }
    }
  }
};
</script>

<style scoped>
.search-results-container {
  display: flex;
  flex-direction: column;
}

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
  justify-content: center;
}

.popover-enter,
.popover-leave-to {
  opacity: 0;
  transform: rotateY(50deg);
}
.popover-enter-to,
.popover-leave {
  opacity: 1;
  transform: rotateY(0deg);
}
.popover-enter-active,
.popover-leave-active {
  transition: opacity, transform 200ms ease-out;
  transition-timing-function: cubic-bezier(0.61,-0.19, 0.7,-0.11);
}

.search-result:focus {
  outline-color: none;
}

.definition {
  background-color: #443A66;
  padding: .5rem;
  color: #A29DB2;
  margin: 1px;
  text-align: left;
  padding: 20px;
}
</style>
