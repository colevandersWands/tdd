describe(`assert has 4 other methods that will make your life easy`, () => {
  describe('assert.strictEqual(a, b)', () => {
    it(`assert.strictEqual(a, b) checks if two values are strictly equal`, () => {
      assert.ok(1 === 1, 'this is the same as assert.strictEqual.  ');
      assert.strictEqual(1, 1);
    });
    it(`throws an error if they are not`, () => {
      // assert.ok('1' === 1, 'this is also the same as assert.strictEqual');
      assert.strictEqual('1', 1, '"1" and 1 are not strictly equal.  ');
    });
  });
  describe('assert.notStrictEqual(a, b)', () => {
    it(`assert.notStrictEqual(a, b) checks if two values are NOT strictly equal`, () => {
      assert.ok('1' !== 1, 'this is the same as assert.notStrictEqual.  ');
      assert.notStrictEqual('1', 1, '"1" and 1 are not strictly equal.  ');
    });
    it(`throws an error if they are not`, () => {
      // assert.ok(1 !== 1, 'this is also the same as assert.notStrictEqual');
      assert.notStrictEqual(1, 1);
    });
  });
  describe(`assert.deepStrictEqual(a, b)`, () => {
    it(`checks if all the values in an object are the same`, () => {
      assert.deepStrictEqual({ a: 2, b: 3 }, { a: 2, b: 3 }, 'first object comparison.  ');
      assert.deepStrictEqual({ a: 2, b: 3 }, { a: 2, b: 4 }, 'second object comparison.  ');
      // there is no easy way to do this with console.assert
    });
    it(`checks if all the values in an array are the same`, () => {
      assert.deepStrictEqual([2, 3], [2, 3], 'first array comparison.  ');
      assert.deepStrictEqual([2, 3], [3, 3], 'second array comparison.  ');
      // there is no easy way to do this with console.assert
    });
    it(`can compare nested data structures (1)`, () => {
      assert.deepStrictEqual({ a: 2, b: ['x', 'y'] }, { a: 2, b: ['x', 'y'] }, 'first  nested comparison.  ');
      assert.deepStrictEqual({ a: 2, b: ['x', 'y'] }, { a: 2, b: ['x', 'z'] }, 'second nested comparison.  ');
      // there is no easy way to do this with console.assert
    });
    it(`can compare nested data structures (2)`, () => {
      assert.deepStrictEqual([{ x: 2 }, { x: 3 }], [{ x: 2 }, { x: 3 }], 'first nested comparison.  ');
      assert.deepStrictEqual([{ x: 2 }, { x: 'y' }], [{ x: 2 }, { x: 3 }], 'second nested comparison.  ');
      // there is no easy way to do this with console.assert
    });
  });
  describe(`assert.notDeepStrictEqual(a, b)`, () => {
    it(`checks if all ANY value in two objects are the different`, () => {
      assert.notDeepStrictEqual({ a: 2, b: 3 }, { a: 2, b: 4 }, 'first object comparison.  ');
      assert.notDeepStrictEqual({ a: 2, b: 3 }, { a: 2, b: 3 }, 'second object comparison.  ');
      // there is no easy way to do this with console.assert
    });
    it(`checks if all ANY value in two arrays are the different`, () => {
      assert.notDeepStrictEqual([2, 3], [3, 3], 'first array comparison.  ');
      assert.notDeepStrictEqual([2, 3], [2, 3], 'second array comparison.  ');
      // there is no easy way to do this with console.assert
    });
    it(`can compare nested data structures (1)`, () => {
      assert.notDeepStrictEqual({ a: 2, b: ['x', 'y'] }, { a: 2, b: ['x', 'z'] }, 'first nested comparison.  ');
      assert.notDeepStrictEqual({ a: 2, b: ['x', 'y'] }, { a: 2, b: ['x', 'y'] }, 'second nested comparison.  ');
      // there is no easy way to do this with console.assert
    });
    it(`can compare nested data structures (2)`, () => {
      assert.notDeepStrictEqual([{ x: 2 }, { x: 4 }], [{ x: 2 }, { x: 3 }], 'first nested comparison.  ');
      assert.notDeepStrictEqual([{ x: 2 }, { x: 3 }], [{ x: 2 }, { x: 3 }], 'second nested comparison.  ');
      // there is no easy way to do this with console.assert
    });
  });
});


describe(`be aware of NaN!`, () => {
  it(`(NaN !== NaN) === true`, () => {
    assert.notStrictEqual(NaN, NaN, 'first assert.  ');
    assert.strictEqual(NaN, NaN, 'second assert.  ');
  });
  it(`deep comparisons are also tricky like this`, () => {
    assert.notDeepStrictEqual({ a: 2, b: NaN }, { a: 2, b: NaN }, 'first assert.  ');
    assert.deepStrictEqual({ a: 2, b: NaN }, { a: 2, b: NaN }, 'second assert.  ');
  });
});
