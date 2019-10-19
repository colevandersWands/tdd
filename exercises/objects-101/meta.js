// while this exercise is more advanced than the last ...
// ... it can be solved by making one small change to your "save-in-an-object" solution!
const obj = {
  createEntry: function (key, value) { },
  readEntry: function (key) { },
  updateEntry: function (key, newValue) { },
  deleteEntry: function (key) { }
};

describe(`the object has methods to access itself`, () => {
  describe(`it can add properties to itself`, () => {
    it(`adds a property ...`, () => {
      obj.createEntry('a', 0);
      assert.strictEqual(obj.a, 0);
    });
    it(`... and another property ...`, () => {
      obj.createEntry('b', 1);
      assert.strictEqual(obj.b, 1);
    });

    it(`... and a last property`, () => {
      obj.createEntry('c', 2);
      assert.strictEqual(obj.c, 2);
    });
  });
  describe(`it can read properties`, () => {
    it(`it can read created properties`, () => {
      const bEntry = obj.readEntry('b');
      assert.strictEqual(bEntry, 1);
    });
    it(`it can read it's methods`, () => {
      const deleteEntry = obj.readEntry('deleteEntry');
      assert.strictEqual(deleteEntry, obj.deleteEntry);
    });
    it(`readEntry can read itself`, () => {
      const readEntry = obj.readEntry('readEntry');
      assert.strictEqual(readEntry, obj.readEntry);
    });
    it(`it can even read the whole object! (challenge)`, () => {
      const theObjectItself = obj.readEntry();
      assert.strictEqual(theObjectItself, obj);
    });
  });
  describe(`it can update properties`, () => {
    it(`it can update created entries`, () => {
      obj.updateEntry('a', 5);
      assert.strictEqual(obj.a, 5);
    });
    it(`it can update methods ...`, () => {
      obj.updateEntry('createEntry', 'hi!');
      assert.strictEqual(obj.createEntry, 'hi!');
    });
    it(`... so they don't work anymore!`, () => {
      obj.updateEntry('createEntry', function () { this.hi = 'hi!' });
      obj.createEntry('x', true);
      assert.strictEqual(obj.hi, 'hi!');
    });
  });
  describe(`it can delete properties`, () => {
    it(`can delete entries`, () => {
      obj.deleteEntry('c');
      assert.ok(!obj.hasOwnProperty('c'));
    });
    it(`it can delete methods ...`, () => {
      obj.deleteEntry('updateEntry');
      assert.strictEqual(obj.updateEntry, undefined);
    });
    it(`... so they don't work anymore!`, () => {
      obj.updateEntry('a', 9);
    });
  });
});
