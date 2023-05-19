const { getAge } = require("../utils")

test('test age', () => {
    expect(getAge(895867200)).toBe(24)
    expect(getAge(1686171600)).toBe(0)
    expect(getAge(-209098800)).toBe(60)
})