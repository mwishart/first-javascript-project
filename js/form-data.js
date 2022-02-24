const form = document.querySelector('#movie-form');
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
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
  for (let entry of movieData.entries()) {
    console.log(`${entry[0]}: ${entry[1]}`);
  }
}

function iterateWithEntriesDestructured(movieData) {
  console.log('Iterating with entries (destructured):');
  for (let [key, value] of movieData.entries()) {
    console.log(`${key}: ${value}`);
  }
}

export {};
