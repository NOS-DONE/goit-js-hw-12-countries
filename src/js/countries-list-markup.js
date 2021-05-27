import countriesListTemplate from '../templates/countries-list.hbs';
import renderOneCountry from '../js/one-country-murkup.js';
import fetchCountries from './fetchCountries.js'

import { alert, notice, info, success, error } from "@pnotify/core";
import { func } from 'assert-plus';


const containerRef = document.querySelector('.container');

export default function renderCountriesList(arr) {

    const murkup = countriesListTemplate(arr);

    if (arr.length > 1 && arr.length <= 10) {

        containerRef.innerHTML = murkup;
        linkCountry()
        return;
    }
    
    if (arr.length > 10) {
        containerRef.innerHTML = '';
        error({
            title: "To many mathces found. Please enter a more specific query!",
        })
    }
}

function linkCountry() {
    const countryItemRef = document.querySelector('.country-list');
    countryItemRef.addEventListener('click', onCountryClick)
}

function onCountryClick(event) {
    console.dir(event.target.dataset.code);
    console.dir(event.target);
    const countryCode = event.target.dataset.code;

    console.log(countryCode);
    if (event.target.nodeName !== 'UL') {
        fetchCountries(event.target.textContent)
            .then(responce => {
                console.log(responce);
                renderOneCountry(responce.filter(country => country.alpha3Code === countryCode))
            })
    }

}