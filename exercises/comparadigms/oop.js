// To do: make all tests pass, leave the assert lines unchanged!

function contextual_push() { }
function contextual_pop() { }
function contextual_slice() { }
function contextual_map() { }
function contextual_reduce() { }


describe('impure functions with free "this." assigned by context', () => {

  describe('are all functions', () => {
    it('contextual_push instancof Function', function () {
      assert.equal(true, contextual_push instanceof Function);
    });
    it('contextual_pop instancof Function', function () {
      assert.equal(true, contextual_pop instanceof Function);
    });
    it('contextual_slice instancof Function', function () {
      assert.equal(true, contextual_slice instanceof Function);
    });
    it('contextual_map instancof Function', function () {
      assert.equal(true, contextual_map instanceof Function);
    });
    it('contextual_reduce instancof Function', function () {
      assert.equal(true, contextual_reduce instanceof Function);
    });
  });

  describe('can push & pop', () => {
    it('push one item and receive new length', function () {
      const arr = [];
      arr.push = contextual_push;
      const new_length = arr.push('a');
      assert.deepEqual(new_length, 1);
      assert.deepEqual(arr, ['a']);
    });
    it('push one items and receive new length', function () {
      const arr = [];
      arr.push = contextual_push;
      const new_length = arr.push('b', 'c');
      assert.deepEqual(new_length, 2);
      assert.deepEqual(arr, ['b', 'c']);
    });
    it('pop one item into a variable', function () {
      const arr = ['a', 'b'];
      arr.push = contextual_push;
      const popped_item = arr.pop();
      assert.deepEqual(popped_item, 'b');
      assert.deepEqual(arr, ['a']);
    });
    it('pop two items into a variable', function () {
      const arr = ['a', 'b'];
      arr.push = contextual_push;
      const popped_item = arr.pop(2);
      assert.deepEqual(popped_item, ['a', 'b']);
      assert.deepEqual(arr, []);
    });
  });


  describe('can slice', () => {
    it('all items with no args', function () {
      const arr = ['a', 'b', 'c', 'd'];
      arr.slice = contextual_slice;
      const new_length = arr.slice();
      assert.deepEqual(new_length, 0);
      assert.deepEqual(arr, []);
    });
    it('all items with one arg', function () {
      const arr = ['a', 'b', 'c', 'd'];
      arr.slice = contextual_slice;
      const new_length = arr.slice(0);
      assert.deepEqual(new_length, 0);
      assert.deepEqual(arr, []);
    });
    it('all items with two arg', function () {
      const arr = ['a', 'b', 'c', 'd'];
      arr.slice = contextual_slice;
      const new_length = arr.slice(0, 4);
      assert.deepEqual(new_length, 0);
      assert.deepEqual(arr, []);
    });
    it('the first half', function () {
      const arr = ['a', 'b', 'c', 'd'];
      arr.slice = contextual_slice;
      const new_length = arr.slice(0, 2);
      assert.deepEqual(new_length, 2);
      assert.deepEqual(arr, ['c', 'd']);
    });
    it('the second half', function () {
      const arr = ['a', 'b', 'c', 'd'];
      arr.slice = contextual_slice;
      const new_length = arr.slice(2, 4);
      assert.deepEqual(new_length, 2);
      assert.deepEqual(arr, ['a', 'b']);
    });
    it('the middle', function () {
      const arr = ['a', 'b', 'c', 'd'];
      arr.slice = contextual_slice;
      const new_lengt = arr.slice(1, 3);
      assert.deepEqual(new_length, 2);
      assert.deepEqual(arr, ['a', 'd']);
    });
  });

  describe('can map', () => {
    it('with:  (x, y) => { return Math.pow(-x, x) + y }', function () {
      const arr = [0, 1, 2, 3];
      arr.map = contextual_map;
      const cb = (x, y) => { return Math.pow(-x, x) + y };
      const success = arr.map(cb);
      assert.deepEqual(success, true);
      assert.deepEqual(arr, [1, 0, 6, -24]);
    });
    it('with:  x => x', function () {
      const arr = [0, 1, 2, 3];
      arr.map = contextual_map;
      const cb = x => x - 1;
      const success = arr.map(cb);
      assert.deepEqual(success, true);
      assert.deepEqual(arr, [-1, 0, 1, 2]);
    });
  });

  describe('can reduce', () => {
    it('with:  (x, y) => { return Math.pow(-x, x) + y }', function () {
      const arr = [0, 1, 2, 3];
      arr.reduce = contextual_reduce;
      const cb = (x, y) => { return Math.pow(-x, x) + y };
      const old_length = arr.reduce(cb);
      assert.deepEqual(old_length, 4);
      assert.deepEqual(arr, [46659]);
    });
    it('with:  x => x', function () {
      const arr = [0, 1, 2, 3];
      arr.reduce = contextual_reduce;
      const cb = x => x;
      const old_length = arr.reduce(cb);
      assert.deepEqual(old_length, 4);
      assert.deepEqual(arr, [6]);
    });
  });
});


// https://github.com/janke-learning/comparadigms/blob/master/mutating-contextual-oop.js
