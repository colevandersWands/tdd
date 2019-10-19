const obj = {
  mixer: '|',
  remixed: '',
  remix: function (str) { },
};


describe('it should remix and save', () => {
  it(`it saves the remixed string`, () => {
    obj.remix('hello');
    assert.strictEqual(obj.remixed, 'h|e|l|l|o');
  });
  it(`it uses the mixer property to do this`, () => {
    obj.mixer = '-';
    obj.remix('hello');
    assert.strictEqual(obj.remixed, 'h-e-l-l-o');
  });
  it(`saves the same value every time (given the same mixer and arg)`, () => {
    obj.remix('hello');
    assert.strictEqual(obj.remixed, 'h-e-l-l-o');
  });
});


