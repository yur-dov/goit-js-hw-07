import { galleryItems } from './gallery-items.js';

const imageBlock = document.querySelector('.gallery');

const createGalleryItemMarkup = itemPicture => {
  return `<div class="gallery__item">
  <a class="gallery__link" href=${itemPicture.original}>
    <img
      class="gallery__image"
      src=${itemPicture.preview}
      data-source=${itemPicture.original}
      alt=${itemPicture.description}
    />
  </a>
</div>`;
};

const galleryAll = galleryItems.map(createGalleryItemMarkup).join('');

imageBlock.insertAdjacentHTML('afterbegin', galleryAll);

imageBlock.addEventListener('click', onOpenModal);

function onOpenModal(event) {
  event.preventDefault();
  const largeImageLink = event.target.dataset.source;

  const modalBlock = basicLightbox.create(
    `
    <img
      class="gallery__image"
      src=${largeImageLink}
      data-source=${largeImageLink}
      alt=${event.target.alt}
    />
`,
    {
      onShow: modalBlock => {
        window.addEventListener('keydown', escapeKeyCloseModal);
      },
      onClose: modalBlock => {
        window.removeEventListener('keydown', escapeKeyCloseModal);
      },
    }
  );

  function escapeKeyCloseModal(event) {
    if (event.code === 'Escape') {
      modalBlock.close();
    }
  }
  modalBlock.show();
}