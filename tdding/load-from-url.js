const loadFromURL = () => {
  const query = readSnippetQuery();
  if (query.code) {
    editor.setValue(query.code);
    loader.cache[''] = query.code;
  } else if (query.exercise) {
    loader(query.exercise);
  } else {
    loader('');
  };
}
