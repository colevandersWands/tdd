const runTests = () => {
  const code = editor.getValue();
  try {
    const mochaNode = document.getElementById('mocha');
    while (mochaNode.firstChild) {
      mochaNode.removeChild(mochaNode.firstChild);
    }

    mocha.suite.suites = [];

    // could be better sandboxed
    const newFunc = (new Function(`return function editor(){${code.toString()}}`))();
    newFunc();

    mocha.run();
    tries.push({
      code,
      report: document.getElementById("mocha").lastChild
    });
  } catch (err) {
    mocha.suite.suites = [];
    mocha.suite.tests = [];
    mocha.setup({ ui: 'bdd', bail: false });
    const errorCode = document.createElement('code');
    errorCode.innerHTML = `
<strong>${err.name}</strong>: line ${err.lineNumber - 2} <br>${err.message}`;
    errorCode.style = 'color:red;';
    document.getElementById('mocha').appendChild(errorCode);
    tries.push({
      code,
      report: err
    });
  }

};
