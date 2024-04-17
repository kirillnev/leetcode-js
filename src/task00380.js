/**
 * 380. Insert Delete GetRandom O(1)
 * @link https://leetcode.com/problems/insert-delete-getrandom-o1/
 *
 * @constructor
 */
var RandomizedSet = function() {
    this.valuesSet = new Set();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (!this.valuesSet.has(val)) {
        this.valuesSet.add(val);
        return true;
    }
    return false;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.valuesSet.has(val)) {
        this.valuesSet.delete(val);
        return true;
    }
    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return [...this.valuesSet][Math.floor(Math.random() * (this.valuesSet.size))];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

module.exports = {RandomizedSet}