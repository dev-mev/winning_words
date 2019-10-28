import { expect } from "chai";
import { getWords, wordContainsAll, wordContainsAny, computeScore } from "@/services/api/wordsApi"

// describe("wordContainsAny", () => {
//   it("handles empty strings", () => {
//     expect(wordContainsAny("hello", [])).to.equal(true);
//   });

//   it("returns true if any letters are in the word", () => {
//     expect(wordContainsAny("abacadabra", ['a', 'a'])).to.equal(true);
//         expect(wordContainsAny("hello", ['x', 'o'])).to.equal(true);
//   });

//   it("returns false if any of the letters are not in the word", () => {
//     expect(wordContainsAny("abacadabra", ['y', 'z'])).to.equal(false);
//   });
// });

// describe("wordContainsAll", () => {
//   it("handles empty strings", () => {
//     expect(wordContainsAll("hello", [])).to.equal(true);
//   });

//   it("returns true if all letters are in the word", () => {
//     expect(wordContainsAll("abacadabra", ['a', 'a'])).to.equal(true);
//   });

//   it("returns false if any of the letters are not in the word", () => {
//     expect(wordContainsAll("abacadabra", ['y', 'z'])).to.equal(false);
//     expect(wordContainsAll("hello", ['x', 'o'])).to.equal(false);
//   });
// });

// describe("getWords", () => {
//   it("checks to see if words exist with required letters", () => {
//     expect(getWords(['j', 'l', 'l', 'y', 'd'], ['z'], ['o'])).to.have.lengthOf(2);
//     expect(getWords(['u'], ['r'], ['x', 'e'])).to.have.lengthOf(0);
//   });

//   it("handles empty strings", () => {
//     expect(getWords(['o', 'm'], [], [])).to.have.lengthOf(2);
//   })
// });

describe("computeScore", () => {
  it("handles empty strings", () => {
    expect(computeScore("hello", [])).to.equal(5);
  });

  it("adds 10 to score for each optional letter", () => {
    expect(computeScore("aa", ['a', 'a'])).to.equal(20);
  });

  it("adds 10 for optional letters and 1 for each other letter in word", () => {
    expect(computeScore("abra", ['a', 'a'])).to.equal(22);
    expect(computeScore("hello", ['x', 'f'])).to.equal(5);
  });
});