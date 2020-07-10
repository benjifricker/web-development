// API Information
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_rhy=';


// Page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');


// Helperfunction to format response on webpage
const renderResponse = (res) => {
  if (!res) {
    console.log(res.status);
  }
  if (!res.length) {
    responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>";
    return;
  }

  let wordList = [];

  for (let i = 0; i < Math.min(res.length, 10); i++) {
    wordList.push(`<li>${res[i].word}</li>`);
  }
  wordList = wordList.join("");

  responseField.innerHTML = `<p>You might be interested in:</p><ol>${wordList}</ol>`;
  return
}


// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = url + queryParams + wordQuery;
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  };

  xhr.open('GET', endpoint);
  xhr.send();
}


// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  };
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);
