const {maxSubarrayLength} = require('./task02958');

test.each([
    [[1,2,3,1,2,3,1,2], 2, 6],
    [[1,2,1,2,1,2,1,2], 1, 2],
    [[5,5,5,5,5,5,5], 4, 4]
    ])('Function maxSubarrayLength()', (nums, k, expected) => {
        expect(maxSubarrayLength(nums, k)).toBe(expected);
});