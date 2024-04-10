const {hIndex} = require('./task00274');

test.each([
    [[100], 1],
    [[3,0,6,1,5], 3],
    [[1,3,1], 1],
    [[0,0], 0],
    [[0], 0],
    [[], 0],
    [[4,4,0,0], 2],
])("Function hIndex(%s)", (citations, expected) => {
    expect(hIndex(citations)).toBe(expected);
});