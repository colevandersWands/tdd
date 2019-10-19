/* how to test objects

  Testing objects is more complex than testing functions.

  With functions, you get the same return value every time you use the same arguments
  This means every test case you write is always correct!
  You can write 15 or 20 test cases, and if you pass them you can be confident

  With objects, it's not always so simple.
  Sometimes the same arguments don't return the same value, and that's correct!

  This is why tests for objects need to be "behavioral"
  ie. How does an object behave over time, as you change it's internal values?

  To test this it is necessary change values and make sure the object still behaves correctly
  You will see this in all of the object-101 exercises

*/


function pureFunctionEasyTesting(a, b) {
  return a + b;
}

describe(`a pure function will always return the same value for the same arguments`, () => {
  it(`the first time it does`, () => {
    assert.strictEqual(pureFunctionEasyTesting(2, 2), 4);
  });
  it(`the second time it does`, () => {
    assert.strictEqual(pureFunctionEasyTesting(2, 2), 4);
  });
  it(`the third time it does`, () => {
    assert.strictEqual(pureFunctionEasyTesting(2, 2), 4);
  });
  it(`...`, () => {
    assert.strictEqual(pureFunctionEasyTesting(2, 2), 4);
    assert.strictEqual(pureFunctionEasyTesting(2, 2), 4);
    assert.strictEqual(pureFunctionEasyTesting(2, 2), 4);
    assert.strictEqual(pureFunctionEasyTesting(2, 2), 4);
    // ...
  });
});

const object = {
  b: 0,
  add: function (a) { return a + this.b }
};

describe(`an object may not because it's return value can depend on stored values`, () => {
  it(`returns 2 the first time 2 is passed as an argument`, () => {
    assert.strictEqual(object.add(2), 2);
  });
  it(`but returns 4 if we set object.b to 2`, () => {
    object.b = 2;
    assert.strictEqual(object.add(2), 4);
  });
  it(`and returns 0 if we set object.b to -2`, () => {
    object.b = -2;
    assert.strictEqual(object.add(2), 0);
  });
  it(`so it's not as simple as writing one test case for each argument`, () => {
    object.b = ' says hi!';
    assert.strictEqual(object.add(2), '2 says hi!');
  });
});
