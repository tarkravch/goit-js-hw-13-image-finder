import imageCard from './templates/image-card.hbs';
import './styles.css';
import { refs } from './refs';

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';
import { alert, error, success, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import clickedImage from './modalImage';
export default function renderGallery(foundImages) {
    console.log(foundImages);
    const imgArr = foundImages.hits;
    console.log(imgArr);
    const finding = imgArr.forEach(foundImg => {
        renderCard(foundImg);

    });
}

function renderCard(foundImg) {
    refs.gallery.insertAdjacentHTML('beforeend', imageCard({ foundImg }));
    // clickedImage.addEventListener('click', showLargeImg);
    const largePicURL = foundImg.largeImageURL;
    console.log(largePicURL);

}

export function noticeSuccess(message) {
    const mySuccess = success({
        text: message,
        delay: 2000,
    });
}

export function noticeError(message) {
    const myError = error({
        text: message,
        delay: 3000,
    });
}