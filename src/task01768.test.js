const {mergeAlternately} = require('./task01768');

test.each([
    ["abc", "pqr", "apbqcr"],
    ["ab", "pqrs", "apbqrs"],
    ["abcd", "pq", "apbqcd"],
    ["", "abcd", "abcd"],
    ["abcd", "", "abcd"],
    ["", "", ""]
])('function mergeAlternately(%s, %s)', (word1, word2, expected) =>{
    expect(mergeAlternately(word1, word2)).toEqual(expected);
});