const {filter} = require('./task2634');

test.each([
    [[0,10,20,30], (n) => n > 10, [20,30]],
    [[1,2,3], (n, i) => i === 0, [1]],
    [[-2,-1,0,1,2], (n) => n + 1 ,[-2,0,1,2]],
])('Function filter(%s, %s)', (arr, fn, expected) => {
    expect(filter(arr, fn)).toEqual(expected);
});