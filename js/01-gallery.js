import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const list = document.querySelector(".gallery")

list.insertAdjacentHTML("beforeend", creatMarkup(galleryItems))
list.addEventListener("click", handleclick)

function handleclick(event) {
    event.preventDefault()
    if (event.target === event.currentTarget) {
        return;
    }
    const currentImage = event.target.closest(".gallery__image")
    const currentImageSourse = currentImage.alt
    const image = galleryItems.find(({ description }) => description === currentImageSourse)
 
    const instance = basicLightbox.create(`
    <img src="${image.original}" width="800" height="600">
`)

instance.show()
}

function creatMarkup(arr) {
    return arr.map(({preview, original, description }) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image"
    src="${preview}" 
    data-source="${original}"
    alt="${description}"
    />
    </a>
    </li>
    `).join("")
}
