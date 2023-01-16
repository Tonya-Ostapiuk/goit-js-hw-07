import { galleryItems } from './gallery-items.js';
// Change code below this line

const listGallery = document.querySelector('.gallery');
const imageMarkup = createGallery (galleryItems);

listGallery.insertAdjacentHTML('beforeend', imageMarkup);
listGallery.addEventListener('click', onGalleryContainerClick);

function createGallery (galleryItems){
  return galleryItems.map(({preview, original, description}) => {
    return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
  }).join('');
};

function onGalleryContainerClick (evt){
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
  return;
  };

  const urlOriginal = evt.target.getAttribute('data-source');
  const instance = basicLightbox.create(`
  <img src="${urlOriginal}" width="800" height="600">
  `);

  instance.show();

  listGallery.addEventListener('keydown', evt => {
		if (evt.key === 'Escape') {
			instance.close()
		}
	});
  
  listGallery.addEventListener('keydown', evt => {
		if (evt.key === 'Escape') {
			listGallery.removeEventListener('keydown', evt )
		}
	});
  
};



console.log(galleryItems);
