/**
 * 2635. Apply Transform Over Each Element in Array
 * @description Given an integer array arr and a mapping function fn,
 *              return a new array with a transformation applied to each element.
 *              The returned array should be created such that returnedArray[i] = fn(arr[i], i).
 *              Please solve it without the built-in Array.map method.
 * @link https://leetcode.com/problems/apply-transform-over-each-element-in-array/
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const resArr = [];
    for (let i = 0; i< arr.length; i++) {
        resArr.push(fn(arr[i], i));
    }
    return resArr;
};

module.exports = {map};