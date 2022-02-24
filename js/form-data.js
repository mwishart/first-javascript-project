const form = document.querySelector('#movie-form');
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  // DO NOT actually submit the form
  event.preventDefault();
  let movieData = new FormData(form);

  console.log('movieData object:', movieData);
  iterateWithKeys(movieData);
  iterateWithEntries(movieData);
  iterateWithEntriesDestructured(movieData);

  // let movieDataEntries = movieData.entries();
}

function iterateWithKeys(movieData) {
  console.log('Iterating with keys:');
  for (let key of movieData.keys()) {
    console.log(`${key}: ${movieData.get(key)}`);
  }
}

function iterateWithEntries(movieData) {
  console.log('Iterating with entries:');
  // [['title', 'Encanto'], ['year', '2022'], ['genre', 'drama']]
  for (let entry of movieData.entries()) {
    console.log(`${entry[0]}: ${entry[1]}`);
  }
}

function iterateWithEntriesDestructured(movieData) {
  console.log('Iterating with entries (destructured):');
  // let entry = movieData.nextEntry()
  // let key = entry[0]
  // let value = entry[1]
  for (let [key, value] of movieData.entries()) {
    console.log(`${key}: ${value}`);
  }
}

export {};
