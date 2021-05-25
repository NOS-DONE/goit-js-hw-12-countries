
import debounce from 'lodash.debounce';
// import oneCountryTemplate from '../templates/one-country-murkup.hbs';
import renderOneCountry from '../js/one-country-murkup.js';
import renderCountriesList from '../js/countries-list-markup.js'

const inputRef = document.querySelector('.input');
const containerRef = document.querySelector('.container');


inputRef.addEventListener('input', debounce(inputHandler, 2000));




export default function inputHandler(event) {
    console.log(event);
    const inputValue = event.target.value;
    
    return fetch(`https://restcountries.eu/rest/v2/name/${inputValue}`)
        .then(responce => {
            return responce.json()
        })
        .then(countries => {

            renderOneCountry(countries)

            return countries;
        })
        .then(countries => {
            renderCountriesList(countries);
        })
}



