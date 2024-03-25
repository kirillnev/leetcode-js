const { createCounter } = require('./task02620')

test('createCounter function', () => {
    const counter = createCounter(10);
    expect(counter()).toBe(10);
    expect(counter()).toBe(11);
    expect(counter()).toBe(12);
});