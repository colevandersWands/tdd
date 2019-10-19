const obj = {
  array: [3],
  mergeArrays: function (arrToMerge) { }
}

describe(`the method returns a merged array`, () => {
  it('the new argument goes at the end', () => {
    const merged = obj.mergeArrays([2]);
    assert.deepStrictEqual(merged, [3, 2])
  })
  it('and does not modify the property', () => {
    const merged = obj.mergeArrays([2]);
    assert.deepStrictEqual(merged, [3, 2])
  })
  it('is not hard-coded for 3 and 2', () => {
    obj.array = ['hi!'];
    const merged = obj.mergeArrays(['bye!']);
    assert.deepStrictEqual(merged, ['hi!', 'bye!']);
  });
  it('and still does not modify obj.array', () => {
    const merged = obj.mergeArrays(['bye!']);
    assert.deepStrictEqual(merged, ['hi!', 'bye!']);
  });
});

