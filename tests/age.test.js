const { age } = require("../helpers")

test('test age', () => {
    expect(age(895867200)).toBe(24)
    expect(age(1686171600)).toBe(false)
    expect(age(-209098800)).toBe(60)
})