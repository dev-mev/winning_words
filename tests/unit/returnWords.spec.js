import { expect } from "chai";
import { getWords, wordContainsAll, wordContainsAny, computeScore } from "@/services/api/returnWords";

describe("wordContainsAny", () => {
  it("handles empty strings", () => {
    expect(wordContainsAny("hello", [])).to.equal(true);
  });

  it("returns true if any letters are in the word", () => {
    expect(wordContainsAny("abacadabra", ["a", "a"])).to.equal(true);
    expect(wordContainsAny("hello", ["x", "o"])).to.equal(true);
  });

  it("returns false if none of the letters are in the word", () => {
    expect(wordContainsAny("abacadabra", ["y", "z"])).to.equal(false);
  });
});

describe("wordContainsAll", () => {
  it("handles empty strings", () => {
    expect(wordContainsAll("hello", [])).to.equal(true);
  });

  it("returns true if all letters are in the word", () => {
    expect(wordContainsAll("abacadabra", ["a", "a"])).to.equal(true);
    expect(wordContainsAll("abacadabra", ["c", "d"])).to.equal(true);
  });

  it("returns false if any of the letters are not in the word", () => {
    expect(wordContainsAll("abacadabra", ["b", "b", "b"])).to.equal(false);
    expect(wordContainsAll("abacadabra", ["y", "z"])).to.equal(false);
    expect(wordContainsAll("hello", ["x", "o"])).to.equal(false);
  });
});

describe("getWords", () => {
  it("handles empty strings", () => {
    expect(getWords(["o", "m"], [], [])).to.have.lengthOf(3);
  });

  it("checks to see if words exist with required letters and without excluded letters", () => {
    expect(getWords(["j", "L", "l", "Y", "d"], ["z"], ["O"])).to.have.lengthOf(2);
    expect(getWords(["u"], ["r"], ["x", "e"])).to.have.lengthOf(0);
  });

  it("returns words with two l's since both are required", () => {
    expect(getWords(["j"], [], ["l", "l"])).to.have.lengthOf(1);
  });
});

describe("computeScore", () => {
  it("handles empty strings", () => {
    expect(computeScore("hello", [])).to.equal(0);
  });

  it("adds 10 to score for each optional letter", () => {
    expect(computeScore("aa", ["a"])).to.equal(10);
    expect(computeScore("abra", ["a", "a"])).to.equal(20);
    expect(computeScore("hello", ["x", "f"])).to.equal(0);
  });
});
