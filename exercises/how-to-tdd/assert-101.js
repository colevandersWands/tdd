/* assert.ok
  For these exercises you will be using the 'assert' library that comes with Node.js

  this is not the same as console.assert!

  console.assert & assert.ok is similar but have one key difference:
  - console.assert:
    if the first argument is falsey
      it will print your message to the console
      and the program will continue
    if the first argument is truthy
      nothing happens
  - assert.ok:
    if the first argument is falsey
      it will throw an error and stop your program at that line of code
      it will print your message (or a default message) to the console
    if the first argument is truthy
      nothing happens


  The purpose of asserting is to prove to yourself and others that your code does what it should

  It will take some discipline to program like this, but in the long run it will more than pay off

*/

describe('how assert.ok() works', () => {
  it('assert throws an error if the first argument is falsey', () => {
    assert.ok(0);
  });
  it('and does nothing if the first argument is truthy', () => {
    assert.ok(1);
  });
  it('passing a string as a second argument, that will be printed', () => {
    assert.ok(0, 'zero is falsey');
  });
  it('and does nothing if the first argument is truthy', () => {
    assert.ok(1, '1 is truthy.  ');
  });
});

describe('assert() is the same as assert.ok()', () => {
  it('assert throws an error if the first argument is falsey', () => {
    assert(0);
  });
  it('and does nothing if the first argument is truthy', () => {
    assert(1);
  });
  it('passing a string as a second argument, that will be printed', () => {
    assert(0, 'zero is falsey');
  });
  it('and does nothing if the first argument is truthy', () => {
    assert(1, '1 is truthy.  ');
  });
});

describe('how assert compares to console.assert', () => {
  it('both do nothing if the first argument is truthy', () => {
    console.assert(1, '1 is truthy');
    assert.ok(1, '1 is truthy');
  });
  it('if the first argument is falsey, console.ok() throws an error and stops the program ...', () => {
    assert.ok(0, '0 is falsey');
    console.assert(0, '0 is falsey \n-- second to last test case');
  });
  it('while console.assert() only logs but doesn\'t stop the program', () => {
    console.assert(0, '0 is falsey\n-- final test case');
    assert.ok(0, `open the console to read the logs.  `);
  });
});

describe(`be aware of NaN!`, () => {
  it(`(NaN !== NaN) === true`, () => {
    assert.ok(NaN !== NaN, 'first assert.  ');
    assert.ok(NaN === NaN, 'second assert.  ');
  });
});
