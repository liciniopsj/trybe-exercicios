const sum = require('./sum');

describe('Testing the sum(a, b) function', () => {
  test('sum receives parameters 4 and 5, returns 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('sum receives parameters 0 and 0, returns 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('sum receives parameters 4 and "5", throws an error', () => {
    expect(() => sum(4, '5')).toThrow();
  });

  test('if error message is "parameters must be numbers" when called receiving the parameterts 4 and "5"', () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  });
});