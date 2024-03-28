/**
 * 2958. Length of Longest Subarray With at Most K Frequency
 * @description You are given an integer array nums and an integer k.
 *              The frequency of an element x is the number of times it occurs in an array.
 *              An array is called good if the frequency of each element in this array is less than or equal to k.
 *              Return the length of the longest good subarray of nums.
 *              A subarray is a contiguous non-empty sequence of elements within an array.
 * {@link https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/}
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {

    let startPos = 0;
    let maxLength = 0;
    const itemsMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const count = (itemsMap.get(nums[i]) ?? 0) + 1;
        itemsMap.set(nums[i], count);
        if (count <= k) continue;

        maxLength = Math.max(maxLength, i - startPos);

        do {
            itemsMap.set(nums[startPos], itemsMap.get(nums[startPos]) - 1);
        } while(nums[startPos++] !== nums[i]);
    }
    return Math.max(maxLength, nums.length - startPos);
};

module.exports = {maxSubarrayLength};