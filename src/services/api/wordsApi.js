import axios from 'axios';
import wordDictionary from "@/data/wordDictionary";

export default {
  getWords(letters) {
    const matchingWords = [];

    for (let i = 0; i < wordDictionary.length; i++) {
      if (letters.every( (letter) => wordDictionary[i].includes(letter))) {
        matchingWords.push(wordDictionary[i]);
      }
    }
    return matchingWords;
  }
}
