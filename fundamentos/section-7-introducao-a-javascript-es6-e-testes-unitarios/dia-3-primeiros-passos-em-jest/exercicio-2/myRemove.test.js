const myRemove = require('./myRemove');

describe('Testing myRemove function', () => {
  test('myRemove() receives ([1, 2, 3, 4], 3) and should return [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('myRemove() receives ([1, 2, 3, 4], 3) and should not return [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toContain([1, 2, 3, 4]);
  });

  test('myRemove() receives ([1, 2, 3, 4], 5) and should return [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).not.toContain([1, 2, 3, 4]);
  });
});