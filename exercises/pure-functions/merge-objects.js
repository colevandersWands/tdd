function mergeObjects(obj1, obj2) {
  // write me!
}


const object1 = { a: 0, b: 1 };
const object2 = { x: 0, y: 1 };

const mergeObjectsTests = [
  { name: 'same args ...', args: [object1, object2], expected: { a: 0, b: 1, x: 0, y: 1 } },
  { name: '... same return value', args: [object1, object2], expected: { a: 0, b: 1, x: 0, y: 1 } },
  { name: 'every time!', args: [object1, object2], expected: { a: 0, b: 1, x: 0, y: 1 } },
  { name: 'case 4', args: [object1, { tree: 'birch' }], expected: { a: 0, b: 1, tree: 'birch' } },
  { name: 'case 5', args: [{ tree: 'birch' }, object2], expected: { x: 0, y: 1, tree: 'birch' } },
  { name: 'case 6', args: [object2, {}], expected: { x: 0, y: 1 } },
];

describe('merge two objects without modifying either', function () {
  mergeObjectsTests.forEach(testCase => {
    it(testCase.name, () => {
      assert.deepStrictEqual(
        mergeObjects(...testCase.args),
        testCase.expected
      )
    });
  })
});

