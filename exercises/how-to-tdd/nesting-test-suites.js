/* Nesting Test Suites
  You can nest test suites inside test suites to make them easier to understand

  Well organized test cases will help you to structure your problem solving process

  notice also how the nested test suites line up with the conditionals in the solution?
  Writing good test cases is tricky, but that's no reason not to try!

  They will also help to study your results.
  Nesting all of your test suites in one 'describe()' will make the report more usable.

  Try clicking on the descriptions right there ->
  Not comment the outer describe and see what happens as you click on the descriptions ->

  (try entering mocha.suite into your console, what do you see?)
*/


function funky(thing) {
  // return Number(thing); // passes the first half of the first suite

  // return isNaN(thing) ? 0 : Number(thing); // passes the whole first suite

  // // passes the first suite, and first half of the second
  // if (typeof thing === 'string') {
  //   return isNaN(thing) ? 0 : Number(thing);
  // } else {
  //   return typeof thing;
  // }

  // passes all tests
  // if (typeof thing === 'string') {
  //   return isNaN(thing) ? 0 : Number(thing);
  // } else {
  //   return thing !== Object(thing)
  //     ? typeof thing
  //     : thing.constructor.name;
  // }

};

describe('funky function', () => {
  describe('strings should return a number', () => {
    describe('non-NaNy strings are cast to numbers', () => {
      it('whole positive numbers', () => {
        assert.ok(funky('1') === 1, '"1" should return 1');
      });
      it('whole negative numbers', () => {
        assert.ok(funky('-1') === -1, '"-1" should return -1');
      });
      it('Infinity', () => {
        assert.ok(funky('Infinity') === Infinity, '"Infinity" should return Infinity');
      });
      it('decimal numbers', () => {
        assert.ok(funky('1.5') === 1.5, '"1.5" should return 1.5');
      });
      it('empty string', () => {
        assert.ok(funky('') === 0, '"" should return 0');
      });
    })
    describe('NaNy values are converted to 0', () => {
      it('punctuation', () => {
        assert.ok(funky(':') === 0, '":" should return 0');
      });
      it('letters', () => {
        assert.ok(funky('e') === 0, '"e" should return 0');
      });
      it('mixed', () => {
        assert.ok(funky('e!') === 0, '"e!" should return 0');
      });
    })
  })

  describe('all other types should return a string', () => {
    describe('primitives return their typeof', () => {
      it('when it is passed a Number', () => {
        const returned = funky(0);
        assert.ok(returned === 'number', 'numbers should return "number"');
      });
      it('when it is passed a Boolean', () => {
        const returned = funky(false);
        assert.ok(returned === 'boolean', 'booleans should return "boolean"');
      });
      it('when it is passed null', () => {
        const returned = funky(null);
        assert.ok(returned === 'object', 'null should return "object"');
      });
      it('when it is passed undefined', () => {
        const returned = funky(undefined);
        assert.ok(returned === 'undefined', 'undefined should return "undefined"');
      });
      it('when it is passed a symbol', () => {
        const returned = funky(Symbol('hi!'));
        assert.ok(returned === 'symbol', 'Symbol(`hi!`) should return "symbol"');
      });
    })
    describe('objects return their constructor name', () => {
      it('when it is passed an object', () => {
        const returned = funky({});
        assert.ok(returned === 'Object', '{} should return "Object"');
      });
      it('when it is passed an array', () => {
        const returned = funky([]);
        assert.ok(returned === 'Array', '[] should return "Array"');
      });
      it('when it is passed an es5 function', () => {
        const returned = funky(function () { });
        assert.ok(returned === 'Function', 'function() { } should return "Function"');
      });
      it('when it is passed an es6 function', () => {
        const returned = funky(() => { });
        assert.ok(returned === 'Function', '() => { } should return "Function"');
      });
    })

  });
});
