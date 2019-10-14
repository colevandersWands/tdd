// function updateModal(code, report) {

//   const mochaReview = document.createElement('div');
//   mochaReview.id = 'mocha';
//   mochaReview.appendChild(report);
//   mochaReview.style = 'width:50%;margin-top:0;max-height:100%;overflow-y:scroll';

//   const codeElement = document.createElement('code');
//   codeElement.className = 'language-js';
//   codeElement.innerHTML = code;
//   const prettyCode = document.createElement('pre');
//   prettyCode.appendChild(codeElement);
//   Prism.highlightAllUnder(prettyCode);
//   prettyCode.style = "width:50%; height: 100%;";

//   const newGuessContainer = document.createElement('div');
//   newGuessContainer.style = 'display:flex; flex-direction: row;';
//   newGuessContainer.appendChild(prettyCode);
//   newGuessContainer.appendChild(mochaReview);

//   const theGuesses = document.getElementById('the-guesses')
//   theGuesses.insertBefore(newGuessContainer, theGuesses.firstChild);
// };

function updateModal(code, report, num) {

  const mochaReview = document.createElement('div');
  mochaReview.id = 'mocha';
  mochaReview.appendChild(report);
  mochaReview.style = 'width:50%;margin-top:0;max-height:100%;overflow-y:scroll';

  const codeElement = document.createElement('code');
  codeElement.className = 'language-js';
  codeElement.innerHTML = code;
  const prettyCode = document.createElement('pre');
  prettyCode.appendChild(codeElement);
  Prism.highlightAllUnder(prettyCode);
  prettyCode.style = "width:50%; height: 100%;";

  const newGuessContainer = document.createElement('div');
  newGuessContainer.style = 'display:flex; flex-direction: row;';
  newGuessContainer.appendChild(prettyCode);
  newGuessContainer.appendChild(mochaReview);

  const reloadButton = document.createElement('button');
  reloadButton.innerHTML = `try ${num}: click here to load it into the editor`;
  reloadButton.addEventListener('click', () => {
    modal.close();
    editor.setValue(code);
    runTests();
  });

  const container = document.createElement('div');
  container.appendChild(reloadButton);
  container.appendChild(newGuessContainer);
  container.appendChild(document.createElement('hr'));

  const theGuesses = document.getElementById('the-guesses')
  theGuesses.insertBefore(container, theGuesses.firstChild);
};





