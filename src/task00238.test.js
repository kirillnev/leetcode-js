const {productExceptSelf} = require('./task00238');

test.each([
    [[1,2,3,4], [24,12,8,6]],
    [[-1,1,0,-3,3], [0,0,9,0,0]],
])('fn productExceptSelf(%s)', (nums, expected) => {
    expect(productExceptSelf(nums)).toEqual(expected);
});