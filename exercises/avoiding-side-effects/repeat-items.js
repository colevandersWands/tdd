function repeatItems(arr, numRepeats) {
  // write me!
}


const array1 = [0, 'e', true];
const array2 = ['p', null, Infinity];

const repeatItemsTests = [
  { name: 'same args ...', args: [array1, 2], expected: [[0, 0], ['e', 'e'], [true, true]] },
  { name: '... same return value', args: [array1, 2], expected: [[0, 0], ['e', 'e'], [true, true]] },
  { name: 'every time !', args: [array1, 2], expected: [[0, 0], ['e', 'e'], [true, true]] },
  { name: 'case 4', args: [array1, 1], expected: [[0], ['e'], [true]] },
  { name: 'case 5', args: [array1, 0], expected: [[], [], []] },
  { name: 'case 6', args: [['p', null], 2], expected: [['p', 'p'], [null, null]] },
];

describe('repeat items in an array', function () {
  repeatItemsTests.forEach(testCase => {
    it(testCase.name, () => {
      assert.deepStrictEqual(
        repeatItems(...testCase.args),
        testCase.expected
      )
    });
  })
});
