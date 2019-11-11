<template>
  <button
    class="search-result-button"
    v-on:click="accessDefinition()"
  >
    <div class="search-result">{{ word }}</div>
      <transition name="popover">
        <p class="definition" v-if="expanded">{{ definition }}</p>
      </transition>
  </button>
</template>

<script>
export default {
  name: "SearchWord",
  props: {
    word: String
  },
  data() {
    return {
      definition: null,
      expanded: false
    };
  },
  methods: {
    accessDefinition() {
      const self = this;
      this.expanded = !this.expanded;

      if (!self.definition) {
        self.definition = "loading...";
        fetch(`/api/word/${encodeURIComponent(self.word)}`)
          .then((res) => res.text())
          .then((text) => {
            self.definition = text;
          });
      }
    }
  }
};
</script>

<style scoped>
.search-result-button {
  width: 100%;
  border: none;
  padding: 0;
  background-color: transparent;
}

.search-result-button:focus {
  outline: none !important;
  border:1px solid #3DB57F;
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
