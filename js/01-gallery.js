import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const container = document.querySelector('.gallery');

const createGalleryItemMarkup = itemProp => {
  return `<div class="gallery__item">
  <a class="gallery__link" href=${itemProp.original}>
    <img
      class="gallery__image"
      src=${itemProp.preview}
      data-source=${itemProp.original}
      alt=${itemProp.description}
    />
  </a>
</div>`;
};

const allGaleryItems = galleryItems.map(createGalleryItemMarkup).join('');

container.insertAdjacentHTML('afterbegin', allGaleryItems);

container.addEventListener('click', onOpenModal);

function onOpenModal(event) {
  event.preventDefault();
  const largeImageLink = event.target.dataset.source;

  const modal = basicLightbox.create(
    `
    <img
      class="gallery__image"
      src=${largeImageLink}
      data-source=${largeImageLink}
      alt=${event.target.alt}
    />
`,
    {
      onShow: modal => {
        window.addEventListener('keydown', escapeKeyCloseModal);
      },
      onClose: modal => {
        window.removeEventListener('keydown', escapeKeyCloseModal);
      },
    }
  );

  function escapeKeyCloseModal(event) {
    if (event.code === 'Escape') {
      modal.close();
    }
  }

  modal.show();
}