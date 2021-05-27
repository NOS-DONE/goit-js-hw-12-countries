
import debounce from 'lodash.debounce';
import renderOneCountry from '../js/one-country-murkup.js';
import renderCountriesList from '../js/countries-list-markup.js'
import '../js/notification.js';
import fetchCountries from './fetchCountries.js'
import { alert, notice, info, success, error } from "@pnotify/core";

const inputRef = document.querySelector('.input');

inputRef.addEventListener('input', debounce(inputHandler, 500));

function inputHandler(event) {
    const inputValue = event.target.value;
    fetchCountries(inputValue)
        .then(countries => {

            renderOneCountry(countries)
            return countries;
        })
        .then(countries => {
            renderCountriesList(countries);          
        })
        .catch(
            () => {
                error({
                    title: "Nothing found!",
                })
        })
}

