const obj = {
  arr: [3],
  merge: function (toMerge) { },
  replaceAll: function (newEntry) { },
  getRemixed: function (mixer) { },
  getCopy: function () { }
};

describe(`the object manipulates an array`, () => {
  it(`merges new arrays at the beginning of its saved array`, () => {
    obj.merge([1, 2]);
    assert.deepStrictEqual(obj.arr, [1, 2, 3]);
  });
  it(`replaces each element in it's saved array with the same character`, () => {
    obj.replaceAll('~');
    assert.deepStrictEqual(obj.arr, ['~', '~', '~']);
  });
  it(`can remix it's array ...`, () => {
    const remixed = obj.getRemixed('|');
    assert.strictEqual(remixed, '~|~|~');
  });
  it(`... without modifying the saved one`, () => {
    assert.deepStrictEqual(obj.arr, ['~', '~', '~']);
  });
  it(`can merge it's remix`, () => {
    const remixed = obj.getRemixed('|')
    obj.merge([remixed]);
    assert.deepStrictEqual(obj.arr, ['~|~|~', '~', '~', '~']);
  });
  it(`returns a copy of it's saved array ...`, () => {
    const copiedArray = obj.getCopy();
    assert.deepStrictEqual(copiedArray, obj.arr);
  });
  it(`... a true copy!`, () => {
    assert.ok(obj.getCopy() !== obj.arr);
  });
});
