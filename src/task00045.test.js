const {jump} = require('./task00045')

test.each([
    [[2,3,1,1,4], 2],
    [[2,3,0,1,4], 2],
])("Function jump(%s)", (nums, expected) => {
    expect(jump(nums)).toBe(expected);
});