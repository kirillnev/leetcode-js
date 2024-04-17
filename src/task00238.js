/**
 * 238. Product of Array Except Self
 * {@link https://leetcode.com/problems/product-of-array-except-self/}
 * @param {number[]} nums
 * @return {number[]}
 */
let productExceptSelf = function(nums) {
    let leftProduct = [1];
    let rightProduct = [1];
    for (let i = 1; i < nums.length; i++) {
        leftProduct.push(leftProduct[i - 1] * nums[i - 1]);
        rightProduct.push(rightProduct[i - 1] * nums.at(-i));
    }
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        res.push(leftProduct[i] * rightProduct.at(-i - 1) + 0);
    }
    return res;
};

module.exports = {productExceptSelf};