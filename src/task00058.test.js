const {lengthOfLastWord} = require('./task00058')

test.each([
    ["Hello World", 5],
    ["   fly me   to   the moon  ", 4],
    ["luffy is still joyboy", 6],
    ["", 0],
    ["    ", 0],
])('Function lengthOfLastWord("%s")', (s, expected) => {
   expect(lengthOfLastWord(s)).toBe(expected);
});