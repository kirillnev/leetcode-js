/**
 * 2667. Create Hello World Function
 * @description Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 * {@link https://leetcode.com/problems/create-hello-world-function/}
 * @return {Function}
 */
var createHelloWorld = function() {

    return function(...args) {
        return "Hello World";
    }
};


/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
