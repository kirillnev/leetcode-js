const {strStr} = require('./task00028');

test.each([
    ["sadbutsad", "sad", 0],
    ["leetcode", "leeto", -1],
    ["sadbutsad", "sad", 0],
])('Function strStr(%s, %s)', (needle, haystack, expected) => {
    expect(strStr(needle, haystack)).toEqual(expected);
});