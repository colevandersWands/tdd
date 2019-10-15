const exercises = {
  advanced: [
    'almost-array',
    'almost-map',
    'almost-set',
  ],
  // comparadigms: [ // https://github.com/janke-learning/comparadigms
  //   'oop',
  //   'pure-functions'
  // ]
}

const loader = (exercisePath) => {
  if (loader.cache[exercisePath]) {
    editor.setValue(loader.cache[exercisePath]);
    runTests();
  } else {
    fetch(`${href}/${exercisePath}.js`)
      .then(function (response) {
        return response.text();
      })
      .then(function (exercise) {
        loader.cache[exercisePath] = exercise;
        editor.setValue(exercise);
        history.pushState(loader.cache, "", `?exercise=${encodeQuery(exercisePath)}`);
        runTests()
      })
      .catch(function (err) {
        editor.setValue(`${err.name}: ${err.message}`);
        console.log(err);
      })
  }
};
loader.cache = {
  '': `describe('mocha + assert', () => {

  it('value is truthy', () => assert.ok(true));

  it('complex types equal?', () => assert.deepStrictEqual([1,2,3], [1,2,3]));
  it('complex types dont equal?', () => assert.notDeepStrictEqual([1,2,3], ['one', 'two']));

  it('value and type equal?', () => assert.strictEqual('1', '1'));
  it('complex types dont equal?', () => assert.notStrictEqual(1, '1'));

  it('throws?', () => assert.throws(() => { throw new Error(); }));
  it('does not throw?', () => assert.doesNotThrow(() => {}));

});`};

{
  const renderItem = (item, path, container) => {
    if (item instanceof Array) {
      return renderArray(item, path, container);
    } else if (typeof item === 'string') {
      return renderString(item, path, container);
    } else if (item && item.constructor.name === 'Object') {
      return renderObject(item, path, container);
    }
  };
  const renderObject = (obj, path, container) => {
    for (let key in obj) {
      const details = document.createElement('details');
      details.style = 'margin-left:15px';
      const summary = document.createElement('summary');
      summary.innerHTML = key;
      details.appendChild(summary);
      renderItem(obj[key], `${path}/${key}`, details);
      container.appendChild(details);
    };
  };
  const renderArray = (arr, path, container) => {
    arr.forEach(entry => {
      renderItem(entry, path, container);
    });
  };
  const renderString = (name, path, container) => {
    const button = document.createElement('button');
    button.innerHTML = name;
    const finalPath = `${path}/${name}`;
    button.onclick = () => { loader(finalPath); runTests(); };
    container.appendChild(button);
  };
  const exerciseDetails = document.getElementById('exercise-details');
  renderItem(exercises, 'exercises', exerciseDetails)
}

