// To do: make all tests pass, leave the assert lines unchanged!

function immutable_push() { }
function immutable_pop() { }
function immutable_slice() { }
function immutable_map() { }
function immutable_reduce() { }


describe('pure functions with no free variables', () => {

  describe('are all functions', () => {
    it('immutable_push instancof Function', function () {
      assert.equal(true, immutable_push instanceof Function);
    });
    it('immutable_pop instancof Function', function () {
      assert.equal(true, immutable_pop instanceof Function);
    });
    it('immutable_slice instancof Function', function () {
      assert.equal(true, immutable_slice instanceof Function);
    });
    it('immutable_map instancof Function', function () {
      assert.equal(true, immutable_map instanceof Function);
    });
    it('immutable_reduce instancof Function', function () {
      assert.equal(true, immutable_reduce instanceof Function);
    });
  });

  describe('can push & pop', () => {
    it('push one item without modifying original arr', function () {
      const arr = [];
      const pushed_into = immutable_push(arr, 'a');
      assert.deepEqual(pushed_into, ['a']);
      assert.deepEqual(arr, []);
    });
    it('push two items without modifying original arr', function () {
      const arr = [0];
      const pushed_into = immutable_push(arr, 'b', 'c');
      assert.deepEqual(pushed_into, [0, 'b', 'c']);
      assert.deepEqual(arr, []);
    });
    it('pop one item without modifying original arr', function () {
      const arr = ['a', 'b'];
      const popped_from = immutable_pop(arr);
      assert.deepEqual(popped_from, ['a']);
      assert.deepEqual(arr, ['a', 'b']);
    });
    it('pop two items without modifying original arr', function () {
      const arr = ['a', 'b'];
      const popped_from = immutable_pop(arr, 2);
      assert.deepEqual(popped_from, []);
      assert.deepEqual(arr, ['a', 'b']);
    });
  });


  describe('can slice', () => {
    it('all items with no args', function () {
      const arr = ['a', 'b', 'c', 'd'];
      const sliced = immutable_slice(arr);
      assert.deepEqual(sliced, ['a', 'b', 'c', 'd']);
      assert.deepEqual(arr, ['a', 'b', 'c', 'd']);
    });
    it('all items with one arg', function () {
      const arr = ['a', 'b', 'c', 'd'];
      const sliced = immutable_slice(arr, 0);
      assert.deepEqual(sliced, ['a', 'b', 'c', 'd']);
      assert.deepEqual(arr, ['a', 'b', 'c', 'd']);
    });
    it('all items with two arg', function () {
      const arr = ['a', 'b', 'c', 'd'];
      const sliced = immutable_slice(arr, 0, 4);
      assert.deepEqual(sliced, ['a', 'b', 'c', 'd']);
      assert.deepEqual(arr, ['a', 'b', 'c', 'd']);
    });
    it('the first half', function () {
      const arr = ['a', 'b', 'c', 'd'];
      const sliced = immutable_slice(arr, 0, 2);
      assert.deepEqual(sliced, ['a', 'b']);
      assert.deepEqual(arr, ['a', 'b', 'c', 'd']);
    });
    it('the second half', function () {
      const arr = ['a', 'b', 'c', 'd'];
      const sliced = immutable_slice(arr, 2, 4);
      assert.deepEqual(sliced, ['c', 'd']);
      assert.deepEqual(arr, ['a', 'b', 'c', 'd']);
    });
    it('the middle', function () {
      const arr = ['a', 'b', 'c', 'd'];
      const sliced = immutable_slice(arr, 1, 3);
      assert.deepEqual(sliced, ['b', 'c']);
      assert.deepEqual(arr, ['a', 'b', 'c', 'd']);
    });
  });

  describe('can map', () => {
    it('with:  (x, y) => { return Math.pow(-x, x) + y }', function () {
      const arr = [0, 1, 2, 3];
      const cb = (x, y) => { return Math.pow(-x, x) + y };
      const mapped = immutable_map(arr, cb);
      assert.deepEqual(mapped, [1, 0, 6, -24]);
      assert.deepEqual(arr, [0, 1, 2, 3]);
    });
    it('with:  x => x', function () {
      const arr = [0, 1, 2, 3];
      const cb = x => x - 1;
      const mapped = immutable_map(arr, cb);
      assert.deepEqual(mapped, [-1, 0, 1, 2]);
      assert.deepEqual(arr, [0, 1, 2, 3]);
    });
  });

  describe('can reduce', () => {
    it('with:  (x, y) => { return Math.pow(-x, x) + y }', function () {
      const arr = [0, 1, 2, 3];
      const cb = (x, y) => { return Math.pow(-x, x) + y };
      const reduced = immutable_reduce(arr, cb);
      assert.deepEqual(reduced, 46659);
      assert.deepEqual(arr, [0, 1, 2, 3]);
    });
    it('with:  x => x', function () {
      const arr = [0, 1, 2, 3];
      const cb = x => x;
      const reduced = immutable_reduce(arr, cb);
      assert.deepEqual(reduced, 6);
      assert.deepEqual(arr, [0, 1, 2, 3]);
    });
  });
});



// https://github.com/janke-learning/comparadigms/blob/master/immutable-pure-fp.js
