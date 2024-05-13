const {romanToInt} = require('./task00013');

test.each([
    ['III', 3],
    ['LVIII', 58],
    ['MCMXCIV', 1994],
    ['D', 500],
])('Function romanToInt(%s)', (roman, expected) => {
    expect(romanToInt(roman)).toBe(expected);
});