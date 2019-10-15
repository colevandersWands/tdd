const runTests = () => {
  const mochaNode = document.getElementById('mocha');
  while (mochaNode.firstChild) {
    mochaNode.removeChild(mochaNode.firstChild);
  }

  mocha.suite.suites = [];

  const code = editor.getValue();
  const newFunc = (new Function(`return function editor(){${code}}`))();

  try {
    newFunc();
    mocha.run();
    tries.push({
      code,
      report: document.getElementById("mocha").lastChild
    });
  } catch (err) {
    console.log(err);
    mocha.suite.suites = [];
    mocha.suite.tests = [];
    mocha.setup({ ui: 'bdd', bail: false });
    document.getElementById('mocha').innerHTML = 'you broke mocha. time to reset it';
    tries.push({
      code,
      report: err
    });
  }

};
