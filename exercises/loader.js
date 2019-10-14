const exercises = {
  advanced: [
    'almost-array',
    'almost-map',
    'almost-set',
  ],
  beginner: [
    'evedont',
    'kishy'
  ],
  ['actual-beginner']: [
    'poo'
  ]
}

const loader = (exercise) => {
  fetch(`${href}/exercises/${exercise}.js`)
    .then(function (response) {
      return response.text();
    })
    .then(function (exercise) {
      editor.setValue(exercise);
      runTests();
    })
    .catch(function (err) {
      throw err;
    })
}

const exerciseDetails = document.getElementById('exercise-details');
for (let collectionKey in exercises) {
  const collectionDetails = document.createElement('details');
  const collectionSummary = document.createElement('summary');
  collectionSummary.innerHTML = collectionKey;
  collectionDetails.appendChild(collectionSummary);
  exercises[collectionKey].forEach(exerciseName => {
    const button = document.createElement('button');
    button.innerHTML = exerciseName.split('-').join(' ');
    button.onclick = () => { loader(`${collectionKey}/${exerciseName}`) };
    collectionDetails.appendChild(button);
  });
  exerciseDetails.appendChild(collectionDetails);
}
