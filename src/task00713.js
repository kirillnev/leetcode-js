/**
 * 713. Subarray Product Less Than K
 * @description Given an array of integers nums and an integer k,
 *              return the number of contiguous subarrays where the product of all the elements in the subarray
 *              is strictly less than k.
 *
 * {@link https://leetcode.com/problems/subarray-product-less-than-k/}
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let count  = 0;

    for (let i = 0; i < nums.length; i++) {
        let mult = nums[i];
        if (mult >= k) continue;
        count++;
        for (let j = i + 1; j < nums.length; j++) {
            mult *= nums[j];
            if (mult >= k) break;
            count++;
        }
    }
    return count;
};
module.exports = {numSubarrayProductLessThanK};