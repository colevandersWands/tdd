/* Tests
  A single test suite describes one thing your code should do

  Test cases in that suite convince you that your code really does that

  A test passes if there are no errors, and fails if there is an error

  (try entering mocha.suite into your console, what do you see?)
  (and what happens if you click on the test descriptions right there ->)
*/


describe('tests fail when there is an error', () => {
  it('access a property on null', () => {
    null.throwAnError;
  });

  it('call something thats not a function', () => {
    const string = '';
    string();
  });

  it('throw a new error', () => {
    throw new Error(`let's fail this test!`);
  });

  it('fail this test with your favorite error', () => {
    // write me!
  });
});

describe('tests pass when there is no error', () => {
  it('access a property on an object', () => {
    const obj = {};
    obj.key = 'value';
  });

  it('call a working function', () => {
    function funky() { }
    funky();
  });

  it(`don't throw an error`, () => {
    const err = new Error(`let's pass this test!`);
  });

  it('catch an error', () => {
    // pass this test by using a try/catch statment
    throw new Error(`let's fail this test!`);
  });
});


describe('no tests? no report!', () => { });
