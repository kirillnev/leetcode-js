const { expect: myExpect} = require('./task02704');

test('Fuction expect()', () => {
    expect(myExpect(5).toBe(5)).toBe(true);
    expect(() => myExpect(5).notToBe(5)).toThrow('Equal');
});