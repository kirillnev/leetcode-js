const {numSubarrayProductLessThanK} = require('./task00713');
const each = require("jest-each");

test.each([
    [[10,5,2,6], 100, 8],
    [[1,2,3], 0, 0],
    ])('Function numSubarrayProductLessThanK()', (nums, k, expected) => {
        expect(numSubarrayProductLessThanK(nums, k)).toBe(expected);
});