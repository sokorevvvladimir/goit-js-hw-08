import SimpleLightbox from "simplelightbox";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryPic = galleryItems.map((galleryItem) =>
`<a class="gallery__item" href="${galleryItem.original}">
  <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
</a>`).join("");

gallery.insertAdjacentHTML("afterbegin", galleryPic);

const openOriginal = function (event) {
    const lightbox = new SimpleLightbox('.gallery a', {captionType: 'attr', captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250});
    
    event.preventDefault();
};

gallery.addEventListener('click', openOriginal);
