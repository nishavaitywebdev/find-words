import { findWords } from "../FindWordsController";

describe("Find words that can be formed from words in dictionary", () => {
  it("should find valid words.", () => {
    const actual = findWords("ate", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]);
    const expected = ["ate", "eat", "tea"];
    expect(actual).toEqual(expected);
  });

  it("should find valid words.", () => {
    const actual = findWords("oogd", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good", "goood"]);
    const expected = ["dog", "do", "god", "goo", "go", "good"];
    expect(actual).toEqual(expected);
  });

  it("should not find valid words.", () => {
    const actual = findWords("", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]);
    const expected = [];
    expect(actual).toEqual(expected);
  });

  it("should find only one", () => {
    const actual = findWords("ate", ["a", "good"]);
    const expected = ["a"];
    expect(actual).toEqual(expected);
  });

  it("should not find valid words.", () => {
    const actual = findWords("somewords", []);
    const expected = [];
    expect(actual).toEqual(expected);
  });

  it("should not find any words in common.", () => {
    const actual = findWords("somewords", ["other", "another"]);
    const expected = [];
    expect(actual).toEqual(expected);
  });
});
