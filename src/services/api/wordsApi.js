import wordDictionary from "@/data/wordDictionary";

const testDictionary = ["CAT", "DOG", "JOLLY"]
const dictionary = wordDictionary;

export function getWords(letters, exclude, include) {
  const matchingWords = [];

  for (let i = 0; i < dictionary.length; i++) {
    let currentWord = dictionary[i];

    if (wordContainsAny(currentWord, letters) && wordContainsAll(currentWord, include)) {
      if (exclude.length > 0) {
        if (!wordContainsAny(currentWord, exclude)) {
          matchingWords.push({word: currentWord});
        }
      } else {
        matchingWords.push({word: currentWord});
      }
    }
  }

  return matchingWords.sort((a, b) => computeScore(b, letters) - computeScore(a, letters));
}

export function wordContainsAll(word, letters) {
  let match = false;
  let wordToCheck = word;

  if (letters.length < 1) {
    return true;
  }

  // if letter is in word, remove that letter from word
  for (let letter of letters) {
    if (wordToCheck.indexOf(letter) >= 0) {
      let index = wordToCheck.indexOf(letter);
      let wordArr = wordToCheck.split("");
      wordArr.splice(index, 1);
      let wordString = wordArr.join();
      match = true;
      wordToCheck = wordString;
    } else {
      return false;
    }
  }

  if (match === true) {
    return true;
  }
}

export function wordContainsAny(word, letters) {
  if (letters.length < 1) {
    return true;
  }

  return letters.some( (letter) => word.includes(letter));
}

export function computeScore(matchingWord, optionalLetters) {
  let score = 0;
  // computes score and orders by highest score
  // for each optional letter score += 10, reg letters += 1
  for (let i = 0; i < matchingWord.word.length; i++) {
    if (optionalLetters.includes(matchingWord.word[i])) {
      score += 10;
    } else {
      score += 1;
    }
  }

  return score
}