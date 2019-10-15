const resetMocha = () => {
  const mochaNode = document.getElementById('mocha');
  while (mochaNode.firstChild) {
    mochaNode.removeChild(mochaNode.firstChild);
  }

  mocha.suite.suites = [];
  mocha.suite.tests = [];
  mocha.setup({ ui: 'bdd', bail: false });
}
