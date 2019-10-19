function replaceItem(arr, index, newItem) {
  // write me!
}


const array1 = [0, 'e', true];
const array2 = ['p', null, Infinity];

const replaceItemTests = [
  { name: 'same args ...', args: [array1, 2, 'hi!'], expected: [0, 'e', 'hi!'] },
  { name: '... same return value', args: [array1, 2, 'hi!'], expected: [0, 'e', 'hi!'] },
  { name: 'every time !', args: [array1, 2, 'hi!'], expected: [0, 'e', 'hi!'] },
  { name: 'case 4', args: [array1, 1, 'bye!'], expected: [0, 'bye!', true] },
  { name: 'case 5', args: [array1, 0, 'huh'], expected: ['huh', 'e', true] },
  { name: 'case 6', args: [['p', null], 0, null], expected: [null, null] },
];

describe('replace an item by index', function () {
  replaceItemTests.forEach(testCase => {
    it(testCase.name, () => {
      assert.deepStrictEqual(
        replaceItem(...testCase.args),
        testCase.expected
      )
    });
  })
});
