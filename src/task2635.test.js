const {map} = require('./task2635');

test.each([
    [[1,2,3], (n) => n + 1, [2,3,4]],
    [[1,2,3], (n, i) => n + i, [1,3,5]],
    [[10,20,30], () => 42 ,[42,42,42]],
    ])('Function map(%s, %s)', (arr, fn, expected) => {
        expect(map(arr, fn)).toEqual(expected);
});