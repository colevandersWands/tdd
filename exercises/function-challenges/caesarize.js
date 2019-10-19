function caesarize(str, shiftNum) {
  // write me!
}

const testCases = [
  { name: 'first', args: ["aBcD", 3], expected: 'dEfG' },
  { name: 'second', args: ["aBcD", -3], expected: 'xYzA' },
  { name: 'third', args: ["heLLo worLd!", 0], expected: 'heLLo worLd!' },
  { name: 'fourth', args: ["heLLo worLd!", 1], expected: 'ifMMp xpsMe!' },
  { name: 'fifth', args: ["", 5], expected: '' },
  { name: 'sixth', args: ["mnOpQr", 26], expected: 'mnOpQr' },
  { name: 'seventh', args: ["#@&&^F*(#", 7], expected: '#@&&^M*(#' },
];

describe(`caesarize should shift letters to the right in the alphabet`, () => {
  testCases.forEach(testCase => {
    it(testCase.name, () => {
      assert.strictEqual(
        caesarize(...testCase.args),
        testCase.expected
      );
    });
  });
});
