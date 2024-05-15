/**
 * 35. Search Insert Position
 * {@link https://leetcode.com/problems/search-insert-position/description/}
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
    if (target < nums[0]) {
        return 0;
    }
    if (target > nums.at(-1)) {
        return nums.length;
    }
    let start = 0;
    let end = nums.length - 1;
    while(start <= end){
        let div = Math.floor((start + end) / 2);
        if (target === nums[div]) {
            return div;
        } else if (target < nums[div]) {
            end = div - 1;
        } else {
            start = div + 1;
        }
    }
    return start;
};

module.exports = {searchInsert};