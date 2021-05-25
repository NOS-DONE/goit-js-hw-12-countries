import oneCountryTemplate from '../templates/one-country-murkup.hbs';

const containerRef = document.querySelector('.container');

export default function renderOneCountry(arr) {

    const murkup = oneCountryTemplate(...arr);

    if (arr.length === 1) {
        containerRef.innerHTML = murkup;
    }
}