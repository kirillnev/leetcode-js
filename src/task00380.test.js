const {RandomizedSet} = require('./task00380');

const operations = ["insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"];
const values = [[1], [2], [2], [], [1], [2], []];
const expectedResults = [true, false, true, 2, true, false, 2];
let testData = [];
for (let i = 0; i < operations.length; i++) {
    testData.push([operations[i], values[i], expectedResults[i]]);
}
let rndSet = new RandomizedSet();
test.each(testData)('Operation=%s, value=%s expected=%s', (operation, value, expected) => {
    expect(rndSet[operation](value[0])).toBe(expected);
});