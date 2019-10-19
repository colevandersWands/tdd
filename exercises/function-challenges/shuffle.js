function shuffle(a, b, c) {
  // write me!
}

const testCases = [
  { name: 'first', args: ['y', 'x', 'z'], expected: 'zyx' },
  { name: 'second', args: ['z', 'x', 'y'], expected: 'yzx' },
  { name: 'third', args: ['y', 'z', 'x'], expected: 'xyz' },
  { name: 'fourth', args: ['x', 'y', 'z'], expected: 'zxy' },
];

describe(`shuffle should rearrange the arguments, concatenate them, and return the result`, () => {
  testCases.forEach(testCase => {
    it(testCase.name, () => {
      assert.strictEqual(
        shuffle(...testCase.args),
        testCase.expected
      );
    });
  });
});
