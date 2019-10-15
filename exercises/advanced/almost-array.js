const obj = {};

describe('pseudo-array', function () {

  it('can add values to the end', function () {
    obj.push('a');
    assert.deepEqual(obj[0], 'a');
    obj.push('b');
    assert.deepEqual(obj[1], 'b');
  });

  it('can remove values from the end', function () {
    obj.pop();
    assert.deepEqual(obj[1], undefined);
    assert.deepEqual(obj[0], 'a');
    obj.pop();
    assert.deepEqual(obj[0], undefined);
  });

  it('can read arbitrary values', function () {
    for (let i = 0; i < 5; i++) {
      obj.push(i);
    };
    assert.deepEqual(obj[4], 4);
    assert.deepEqual(obj[3], 3);
    assert.deepEqual(obj[2], 2);
    assert.deepEqual(obj[1], 1);
    assert.deepEqual(obj[0], 0);
  });

  it('can remove arbitrary elements', function () {
    obj.pop(2);
    assert.deepEqual(obj[2], 3);
  });

  it('throws error if un-poppable is popped', function () {
    for (let i = 0; i < 4; i++) {
      obj.pop();
    };
    assert.throws(obj.pop());
    assert.throws(obj.pop(0));
  });

});
