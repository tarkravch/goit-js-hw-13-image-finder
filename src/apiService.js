// import debounce from 'lodash.debounce';
import imageCard from './templates/image-card.hbs';
import './styles.css';

import { refs } from './refs';
import { renderGallery } from './renderGallery';
import clickedImage from './modalImage';
import showLargeImg from './modalImage';

/* import '../node_modules/@pnotify/core/dist/PNotify.css';
import '../node_modules/@pnotify/mobile/dist/PNotifyMobile.css';
import '../node_modules/@pnotify/core/dist/BrightTheme.css'
import { alert, error, success, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js'; */

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';
import { alert, error, success, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';

const MAIN_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
export const API_KEY = '21265034-f349ebe085002257868a3d8ee';
export const options = {
    headers: {
        Authorization: API_KEY,
    },
};
/* API SERVICE */
export default class ApiService {
    constructor() {
        this.searchQuery = '';
        this.pageNumber = 1;
    }
    fetchImages() {
        return fetch(`${MAIN_URL}&q=${this.searchQuery}&page=${this.pageNumber}&per_page=12&key=${API_KEY}`)
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then((foundImages) => {
                console.log(foundImages);
                this.incrementPage();
                return foundImages;
            })
    }
    incrementPage() {
        this.pageNumber += 1;
    }

    resetPage() {
        this.pageNumber = 1;
        // clickedImage.removeEventListener('click', showLargeImg);
    }
    clearGallery() {
        refs.gallery.innerHTML = '';
    }
    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }

}