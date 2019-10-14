
const object = {
  names: ['turd'],
  get name() {
    return this.names[this.names.length - 1];
  },
  set name(newName) {
    this.names.push(newName);
  },
  greet: function () {
    return `hello ${this.name}`;
  }
};


describe('test cases', () => {

  before(function () {
    object.name = 'turd';
  });

  it('name is turd', () => assert.strictEqual(object.name, 'turd'));
  it('returns hello turd', () => assert.strictEqual(object.greet(), 'hello turd'));

  it('name is poo', () => {
    object.name = 'poo';
    assert.strictEqual(object.name, 'poo');
  });
  it('returns hello poo', () => {
    assert.strictEqual(object.greet(), 'hello poo');
    assert.notStrictEqual(object.greet(), 'hello turd');
  });
  it('turd poo', () => assert.deepEqual(object.names, ['turd', 'poo', 'turd', 'poo']));

});
