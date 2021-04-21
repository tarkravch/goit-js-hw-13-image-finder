// import debounce from 'lodash.debounce';
import imageCard from './templates/image-card.hbs';
import './styles.css';


const MAIN_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
const API_KEY = '21265034-f349ebe085002257868a3d8ee';
const options = {
    headers: {
        Authorization: API_KEY,
    },
};
const inputForm = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');



/* import { refs } from './refs';
import { renderInfo } from './render';
import { noticeError } from './render';
import renderList from './render';
import renderCard from './render';
import clearInputField from './render'; */

/* import '../node_modules/@pnotify/core/dist/PNotify.css';
import '../node_modules/@pnotify/mobile/dist/PNotifyMobile.css';
import '../node_modules/@pnotify/core/dist/BrightTheme.css'
import '../src/styles.css';
import { alert, error, success, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js'; */


inputForm.addEventListener('submit', (event => {
    const form = event.currentTarget;
    const searchQuery = form.value;
    console.log(searchQuery);

    /* return fetchImages(searchQuery, options)
        .then(renderInfo)
        .catch(error => {
            noticeError('There is an error. Please try more specific query.');
        }) */
    /* .finally(() => {
        inputForm.value = '';
    }) */
}));




/* export default function fetchImages(searchQuery) {
    return fetch(`${MAIN_URL}&q=${searchQuery}`)
        .then(response => {
            return response.json();
        })
} */