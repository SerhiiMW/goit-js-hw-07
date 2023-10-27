import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");

list.insertAdjacentHTML("beforeend", creatMarkup(galleryItems));
list.addEventListener("click", handleclick);

function handleclick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  const currentImage = event.target.closest(".gallery__image");
  const currentImageSourse = currentImage.alt;
  const image = galleryItems.find(
    ({ description }) => description === currentImageSourse
  );

    
    var lightbox = new SimpleLightbox(".gallery a", {
        nav: true,
        enableKeyboard: true,
        docClose: true,
        captionPosition: 'bottom',
        captionDelay: 250,
    });

}

function creatMarkup(arr) {
  return arr.map(({preview, original, description }) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
    </a>
    </li>
    `).join("")
}
