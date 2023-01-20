// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryImages = document.querySelector(".gallery");
const imagesMarkup = createPictureGallery(galleryItems);
galleryImages.insertAdjacentHTML("beforeend", imagesMarkup);
function createPictureGallery(galleryItems){
    return galleryItems
    .map(({preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" 
        src="${preview}"
         alt="${description}" />
      </a>
      </div>`
    })
    .join("");
}
let lightbox = new SimpleLightbox('.gallery a', {captionsData:'alt', captionPosition: 'bottom',captionDelay: 250, });


console.log(galleryItems);

