const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test('return an array', () => {
    const result = shuffle([1, 2, 3]);
    expect(Array.isArray(result)).toBe(true);
  })
  test('return an array of the same length as the argument', () => {
    const input = [1, 2, 3];
    const result = shuffle(input);
    expect(result.length).toBe(input.length);
  })
  test('contain all the same items as the input array', () => {
    const input = [1, 2, 3];
    const result = shuffle(input);
    expect(result).toEqual(expect.arrayContaining(input));
  })
  test('shuffle the items in the array', () => {
    const input = [1, 2, 3];
    const result = shuffle(input);
    expect(result).not.toEqual(input);
  })
})
