const obj = {
  array: [3],
  mergeArrays: function (arrToMerge) { }
}

describe(`the method merges with the array property`, () => {
  it('the new argument goes at the end', () => {
    obj.mergeArrays([2]);
    assert.deepStrictEqual(obj.array, [3, 2])
  });
  it('and does modify the array property', () => {
    obj.mergeArrays(obj.array);
    assert.deepStrictEqual(obj.array, [3, 2, 3, 2])
  });
  it('the new argument still goes at the end', () => {
    obj.array = [5]
    obj.mergeArrays([1]);
    assert.deepStrictEqual(obj.array, [5, 1])
  });
  it('and still modifies the array property', () => {
    obj.mergeArrays([-5]);
    assert.deepStrictEqual(obj.array, [5, 1, -5])
  });
});
