const obj = {
  entries: {},
  newEntry: function (key, value) { },
  readEntry: function (key) { },
  updateEntry: function (key, newValue) { },
  deleteEntry: function (key) { }
};

describe(`the object has methods to access a saved object`, () => {
  it(`it can create entries`, () => {
    obj.newEntry('a', 0);
    obj.newEntry('b', 1);
    obj.newEntry('c', 2);
    assert.deepStrictEqual(obj.entries, { a: 0, b: 1, c: 2 });
  });
  it(`it can read entries`, () => {
    const bEntry = obj.readEntry('b');
    assert.strictEqual(bEntry, 1);
  });
  it(`it can update entries`, () => {
    obj.updateEntry('a', 5);
    assert.deepStrictEqual(obj.entries, { a: 5, b: 1, c: 2 });
  });
  it(`can delete entries`, () => {
    obj.deleteEntry('c');
    assert.deepStrictEqual(obj.entries, { a: 5, b: 1 });
  });
});
