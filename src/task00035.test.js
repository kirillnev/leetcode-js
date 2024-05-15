const {searchInsert} = require('./task00035');

test.each([
    [[1,3,5,6], 5, 2],
    [[1,3,5,6], 2, 1],
    [[1,3,5,6], 7, 4],
])('Function searchInsert(%s, %s)', (nums, target, expected) => {
    expect(searchInsert(nums, target)).toEqual(expected);
});