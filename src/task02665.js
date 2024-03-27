/**
 * 2665. Counter II
 * @description Write a function createCounter. It should accept an initial integer init.
 *              It should return an object with three functions.
 * {@link https://leetcode.com/problems/counter-ii/}
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let counter = init;
    return {
        increment: () => ++counter,
        reset: () => counter = init,
        decrement: () => --counter,

    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

module.exports = {createCounter};