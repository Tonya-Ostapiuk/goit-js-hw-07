import { galleryItems } from './gallery-items.js';
// Change code below this line
const listGallery = document.querySelector('.gallery');
const imageMarkup = createGallery (galleryItems);

listGallery.insertAdjacentHTML('beforeend', imageMarkup);
// listGallery.addEventListener('click', onGalleryContainerClick);

function createGallery (galleryItems){
  return galleryItems.map(({preview, original, description}) => {
    return `
    <div class="gallery__item">
    <a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
        title="${description}"
      />
    </a>
  </div>`;
  }).join('');
};

const gallerySlide = new SimpleLightbox('.gallery a', {
	captionDelay: 250
});

console.log(galleryItems);
