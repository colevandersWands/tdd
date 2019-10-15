/* Passing Tests
  The idea behind TDD is to write tests first(!) and then write code to pass them

  It's best to only have a single assert in each 'it()' test
  This will make your tests and report as readable as possible

  give it a try! can you write this function to pass the tests?
  1. run and fail all the tests
  2. make some changes that you think will pass more tests
  3. run and fail fewer tests
  4. make some changes to correct your mistakes from last time
  5. run and fail different tests
  ...

  (pro tip: hit 'run tests' after every little change!)
  (try entering mocha.suite into your console, what do you see?)s
*/


function wrapInArray(thing) {
  // return []; // uncomment this line to pass the first test suite
  // return ['hi!']; // uncomment this line to pass the first and second test suites
  // return [thing]; // uncomment this line to pass all 3 test suites
  // can you pass the last tests?
};

describe('the wrapInArray function', () => {
  describe('should always return an array', () => {
    it('when it is passed a String', () => {
      const shouldBeAnArray = wrapInArray('');
      assert.ok(shouldBeAnArray instanceof Array, 'should be an array');
    });
    it('when it is passed a Number', () => {
      const shouldBeAnArray = wrapInArray(0);
      assert.ok(shouldBeAnArray instanceof Array); // default message is printed
    });
    it('when it is passed a Boolean', () => {
      const shouldBeAnArray = wrapInArray(false);
      assert.ok(shouldBeAnArray instanceof Array, 'should be an array');
    });
    it('when it is passed null', () => {
      const shouldBeAnArray = wrapInArray(null);
      assert.ok(shouldBeAnArray instanceof Array); // default message is printed
    });
    it('when it is passed undefined', () => {
      const shouldBeAnArray = wrapInArray(undefined);
      assert.ok(shouldBeAnArray instanceof Array, 'should be an array');
    });
    it('when it is passed an Array', () => {
      const shouldBeAnArray = wrapInArray([]);
      assert.ok(shouldBeAnArray instanceof Array); // default message is printed
    });
    it('when it is passed an Object', () => {
      const shouldBeAnArray = wrapInArray({});
      assert.ok(shouldBeAnArray instanceof Array, 'should be an array');
    });
  });

  describe('that array should contain only one item', () => {
    it('when it is passed a String', () => {
      const returnedArray = wrapInArray('');
      assert.ok(returnedArray.length === 1, 'length should be 1');
    });
    it('when it is passed a Number', () => {
      const returnedArray = wrapInArray(0);
      assert.ok(returnedArray.length === 1, 'length should be 1');
    });
    it('when it is passed a Boolean', () => {
      const returnedArray = wrapInArray(false);
      assert.ok(returnedArray.length === 1, 'length should be 1');
    });
    it('when it is passed null', () => {
      const returnedArray = wrapInArray(null);
      assert.ok(returnedArray.length === 1, 'length should be 1');
    });
    it('when it is passed undefined', () => {
      const returnedArray = wrapInArray(undefined);
      assert.ok(returnedArray.length === 1, 'length should be 1');
    });
    it('when it is passed an Array', () => {
      const returnedArray = wrapInArray([]);
      assert.ok(returnedArray.length === 1, 'length should be 1');
    });
    it('when it is passed an Object', () => {
      const returnedArray = wrapInArray({});
      assert.ok(returnedArray.length === 1, 'length should be 1');
    });
  });

  describe('that item should be the argument', () => {
    it('when it is passed a String', () => {
      const arg = 'hello';
      const returnedArray = wrapInArray(arg);
      assert.ok(returnedArray[0] === arg, 'array should wrap argument');
    });
    it('when it is passed a Number', () => {
      const arg = 1;
      const returnedArray = wrapInArray(arg);
      assert.ok(returnedArray[0] === arg, 'array should wrap argument');
    });
    it('when it is passed a Boolean', () => {
      const arg = true;
      const returnedArray = wrapInArray(arg);
      assert.ok(returnedArray[0] === arg, 'array should wrap argument');
    });
    it('when it is passed null', () => {
      const arg = null;
      const returnedArray = wrapInArray(arg);
      assert.ok(returnedArray[0] === arg, 'array should wrap argument');
    });
    it('when it is passed undefined', () => {
      const arg = undefined;
      const returnedArray = wrapInArray(arg);
      assert.ok(returnedArray[0] === arg, 'array should wrap argument');
    });
    it('when it is passed an Array', () => {
      const arg = [1, 2, 3];
      const returnedArray = wrapInArray(arg);
      assert.ok(returnedArray[0] === arg, 'array should wrap argument');
    });
    it('when it is passed an Object', () => {
      const arg = { a: 1, b: 2 };
      const returnedArray = wrapInArray(arg);
      assert.ok(returnedArray[0] === arg, 'array should wrap argument');
    });
  });
});
