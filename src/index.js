import './styles.css';
import './apiService';

/* import '../node_modules/@pnotify/core/dist/PNotify.css';
import '../node_modules/@pnotify/mobile/dist/PNotifyMobile.css';
import '../node_modules/@pnotify/core/dist/BrightTheme.css'
import { alert, error, success, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
 */

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';
import { alert, error, success, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';

import * as basicLightbox from 'basiclightbox';

import showLargeImg from './modalImage';

import renderGallery from './renderGallery';
import { refs } from './refs';
import clickedImage from './modalImage';
import imageCard from './templates/image-card.hbs';
import ApiService from './apiService';
import API_KEY from './apiService';
import options from './apiService';

import noticeError from './renderGallery';
import noticeSuccess from './renderGallery';

refs.inputForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', loadMore);
refs.loadMoreBtn.setAttribute('hidden', true);


const apiRequest = new ApiService();
console.log(apiRequest);
let searchValue;

function onSearch(event) {
    event.preventDefault();

    apiRequest.query = event.currentTarget.elements.query.value;
    searchValue = apiRequest.query;
    if (searchValue === "" || searchValue === ' ') {
        return alert({ text: 'Please, input something into search field!', delay: 2000 });
    }
    apiRequest.resetPage();
    apiRequest.clearGallery();
    apiRequest.fetchImages(searchValue, options)
        .then(renderGallery)
        .then(refs.loadMoreBtn.removeAttribute('hidden'))
        .then(success({ text: 'Gallery has been successfully built!', delay: 2000 }))
        .catch(error => {
            error('There is an error. Please try more specific query.');
        })
        /* .finally(() => {
            refs.gallery.innerHTML = '';
        }) */
};

function loadMore() {

    const heightToScroll = document.documentElement.offsetHeight;
    window.scrollTo({ top: heightToScroll, left: 0, behavior: 'smooth' });

    apiRequest.fetchImages(searchValue, options)
        .then(renderGallery);

}