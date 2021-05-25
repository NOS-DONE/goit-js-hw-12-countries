import countriesListTemplate from '../templates/countries-list.hbs';

const containerRef = document.querySelector('.container');

export default function renderCountriesList(arr) {

    const murkup = countriesListTemplate(arr);

    if (arr.length > 1) {
        containerRef.innerHTML = murkup;
    }
}