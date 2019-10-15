const array1 = [0, 'e', true];
const array2 = ['p', null, Infinity];

const mergeArraysTests = [
  { name: 'same args ...', args: [array1, array2], expected: [0, 'e', true, 'p', null, Infinity] },
  { name: '... same return value', args: [array1, array2], expected: [0, 'e', true, 'p', null, Infinity] },
  { name: 'every time!', args: [array1, array2], expected: [0, 'e', true, 'p', null, Infinity] },
  { name: 'case 4', args: [array2, array1], expected: ['p', null, Infinity, 0, 'e', true] },
  { name: 'case 5', args: [array2, []], expected: ['p', null, Infinity] },
  { name: 'case 6', args: [array2, [undefined]], expected: ['p', null, Infinity, undefined] },
];

function mergeArrays(arr1, arr2) {
  // write me!
}

describe('copy arrays to avoid side effects', function () {
  mergeArraysTests.forEach(testCase => {
    it(testCase.name, () => {
      assert.deepStrictEqual(
        mergeArrays(...testCase.args),
        testCase.expected
      )
    });
  })
})
