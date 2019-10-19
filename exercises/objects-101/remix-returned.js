const obj = {
  mixer: '|',
  remix: function (str) { }
};

describe('it should remix and return', () => {
  it(`it returns the remixed string`, () => {
    assert.strictEqual(obj.remix('hello'), 'h|e|l|l|o');
  });
  it(`it uses the mixer property to do this`, () => {
    obj.mixer = '-';
    assert.strictEqual(obj.remix('hello'), 'h-e-l-l-o');
  });
  it(`returns the same value every time (given the same mixer and arg)`, () => {
    assert.strictEqual(obj.remix('hello'), 'h-e-l-l-o');
  });
});

