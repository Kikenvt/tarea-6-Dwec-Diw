// Array of image URLs
let images = [
  {webp: '../assets/imgs/gallery/thumb/1.webp', jpg: '../assets/imgs/gallery/thumb/1.jpg'},
  {webp: '../assets/imgs/gallery/thumb/2.webp', jpg: '../assets/imgs/gallery/thumb/2.jpg'},
  {webp: '../assets/imgs/gallery/thumb/3.webp', jpg: '../assets/imgs/gallery/thumb/3.jpg'},
  {webp: '../assets/imgs/gallery/thumb/4.webp', jpg: '../assets/imgs/gallery/thumb/4.jpg'},
  {webp: '../assets/imgs/gallery/thumb/5.webp', jpg: '../assets/imgs/gallery/thumb/5.jpg'},
];

// Get the gallery container
var galleryContainer = document.querySelector('.slider');

// Loop through the images array
for (let i = 0; i < images.length; i++) {
    // Create a new div element
    let newSlide = document.createElement('div');

    // Add the slide class to the div
    newSlide.classList.add('slide');

    // Create a new picture element
    let newPicture = document.createElement('picture');

    // Create a new source element for webp
    let newSourceWebp = document.createElement('source');
    newSourceWebp.srcset = images[i].webp;
    newSourceWebp.type = 'image/webp';

    // Create a new source element for jpg
    let newSourceJpg = document.createElement('source');
    newSourceJpg.srcset = images[i].jpg;
    newSourceJpg.type = 'image/jpeg';

    // Create a new img element
    let newImg = document.createElement('img');
    newImg.src = images[i].jpg; // Fallback for browsers that do not support picture/source

    // Append the source and img elements to the picture
    newPicture.appendChild(newSourceWebp);
    newPicture.appendChild(newSourceJpg);
    newPicture.appendChild(newImg);

    // Append the picture element to the newSlide
    newSlide.appendChild(newPicture);

    // Append the newSlide to the gallery container
    galleryContainer.appendChild(newSlide);

    newPicture.onclick = function(){
      mostrarImagen(i);
    }
    
}


// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX property to index * 100% 
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

//   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select prev slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide-- 
  }
  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

function mostrarImagen(i){
  const imagen = document.createElement('picture');
  imagen.innerHTML = `
        
        <img loading="lazy" width="200" height="300" src="assets/imgs/gallery/${i+1}.jpg" alt="Imagen ${i+1}">
        `;

  // Crea el overlay para mostrar la imagen
  const overlay = document.createElement('div');
  overlay.appendChild(imagen);
  overlay.classList.add('overlay');
  overlay.onclick = function(){
    const body = document.querySelector('body');
    body.classList.remove('fijar-body')
    overlay.remove()
  }

  // Boton para cerrar el Modal
  const cerrarModal = document.createElement('p');
  cerrarModal.textContent = 'X';
  cerrarModal.classList.add('btn-cerrar');
  cerrarModal.onclick = function(){
    const body = document.querySelector('body');
    body.classList.remove('fijar-body')
    overlay.remove()
  }

  overlay.appendChild(cerrarModal);

  // Mostrar en el HTML
  const body = document.querySelector('body');
  body.appendChild(overlay);
  body.classList.add('fijar-body');


}