import wordDictionary from "@/data/wordDictionary";

const testDictionary = ["CAT", "DOG", "JOLLY"];
const dictionary = wordDictionary;

export function getWords(letters, exclude, include) {
  const matchingWords = [];

  for (let i = 0; i < dictionary.length; i++) {
    const currentWord = dictionary[i].toUpperCase();

    // ensure all required letters are present and excluded letters are not
    if (wordContainsAll(currentWord, include)) {
      if (exclude.length > 0) {
        if (!wordContainsAny(currentWord, exclude)) {
          matchingWords.push({ word: currentWord });
        }
      } else {
        matchingWords.push({ word: currentWord });
      }
    }
  }

  return matchingWords.sort((a, b) => computeScore(b.word, letters) - computeScore(a.word, letters));
}

export function wordContainsAll(word, letters) {
  word = word.toUpperCase();
  let match = false;

  if (letters.length < 1) {
    return true;
  }

  // if letter is in word, remove that letter from word
  for (let letter of letters) {
    letter = letter.toUpperCase();
    const index = word.indexOf(letter);

    if (index >= 0) {
      const wordArr = word.split("");
      wordArr.splice(index, 1);
      word = wordArr.join("");
      match = true;
    } else {
      return false;
    }
  }

  return match;
}

export function wordContainsAny(word, letters) {
  if (letters.length < 1) {
    return true;
  }

  return letters.some((letter) => word.toUpperCase().includes(letter.toUpperCase()));
}

export function computeScore(matchingWord, optionalLetters) {
  let score = 0;
  matchingWord = matchingWord.toUpperCase();

  if (optionalLetters.length < 1) {
    return score;
  }

  // computes score and orders by highest score
  // for each optional letter score += 10
  // if letter is in word, remove letter so not counted multiple times
  for (let letter of optionalLetters) {
    letter = letter.toUpperCase();
    if (matchingWord.includes(letter)) {
      const index = matchingWord.indexOf(letter);
      score += 10;

      if (index >= 0) {
        const wordArr = matchingWord.split("");
        wordArr.splice(index, 1);
        matchingWord = wordArr.join("");
      }
    }
  }

  return score;
}
