import { galleryItems } from './gallery-items.js';

const imageBlock = document.querySelector('.gallery')

const gallerySet = gallaryAdd(galleryItems)

function gallaryAdd(elements) {
const newArr = elements.map(item => `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image lazyload blur-up" data-src="${item.preview}" alt="${item.description}"  />
</a>`).join('')

    return newArr
}

imageBlock.innerHTML = gallerySet

let gallery = new SimpleLightbox('.gallery a', {captionsData :'alt', captionDelay: 250});