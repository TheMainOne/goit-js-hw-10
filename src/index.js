import './css/styles.css';
import { fetchCountries } from './fetchCountries';

var debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
  list: document.querySelector('country-list'),
  container: document.querySelector('country-list'),
};

refs.input.addEventListener('input', debounce(() => {
  const valueOfInput = refs.input.value;
  console.log(valueOfInput);
  fetchCountries(valueOfInput)
    .then(countries => renderUserList(countries))
    .catch(error => console.log(error));
},DEBOUNCE_DELAY));


function renderUserList(countries) {
  const markup = countries
    .map((country) => {
      return `<li>
          <p><b>Country</b>: ${country.name.official}</p>
          <p><b>Capital</b>: ${country.capital}</p>
          <p><b>Population</b>: ${country.population}</p>
        </li>`;
    })
      .join("");
    console.log(markup);
    // refs.list.innerHTML = markup;
}

// console.log(refs.input);
