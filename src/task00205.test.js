const {isIsomorphic} = require("./task00205")

test.each([
    ["egg", "add", true],
    ["foo", "bar", false],
    ["paper", "title", true],
    ["badc", "baba", false],
    ["ab", "aa", false]
])("Function isIsomorphic('%s', '%s')", (s, t, expexted) => {
    expect(isIsomorphic(s, t)).toBe(expexted);
});