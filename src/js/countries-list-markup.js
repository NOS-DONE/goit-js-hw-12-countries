import countriesListTemplate from '../templates/countries-list.hbs';
import { alert, notice, info, success, error } from "@pnotify/core";


const containerRef = document.querySelector('.container');

export default function renderCountriesList(arr) {

    const murkup = countriesListTemplate(arr);

    if (arr.length > 1 && arr.length <= 10) {

        containerRef.innerHTML = murkup;
        return;
    }
    
    if (arr.length > 10) {
        containerRef.innerHTML = '';
        error({
            title: "To many mathces found. Please enter a more specific query!",
        })
    }
 


}