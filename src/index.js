import './css/styles.css';

const DEBOUNCE_DELAY = 300;


const refs = {
    input: document.querySelector('#search-box'),
    list: document.querySelector('country-list'),
    container: document.querySelector('country-list'),
}

console.log(refs.input);