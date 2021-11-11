import './css/styles.css';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
  list: document.querySelector('country-list'),
  container: document.querySelector('country-list'),
};

refs.input.addEventListener('input', () => {
  const valueOfInput = refs.input.value;
  console.log(valueOfInput);
  fetchCountries(valueOfInput)
    .then(users => renderUserList(users))
    .catch(error => console.log(error));
});


function renderUserList(users) {
  const markup = users
    .map((user) => {
      return `<li>
          <p><b>Name</b>: ${user.name}</p>
          <p><b>Email</b>: ${user.email}</p>
          <p><b>Company</b>: ${user.company.name}</p>
        </li>`;
    })
    .join("");
  userList.innerHTML = markup;
}

// console.log(refs.input);
