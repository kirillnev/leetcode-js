const {isValid} = require('./task00020');

test.each([
    ["", true],
    ["[", false],
    [")(", false],
    ["()", true],
    ["()[]{}", true],
    ["(]", false],
    ["((({{{)))}}}", false],
])('Function isValid(%s)', (s, excepted) => {
    expect(isValid((s))).toEqual(excepted);
});
