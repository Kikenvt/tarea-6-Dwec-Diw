


// Get the gallery container
export function createGallery() {
	const galleryContainer = document.querySelector('.slider');

	for (let i = 1; i <= 5; i++) {
		const slide = document.createElement('div');
		slide.classList.add('slide');

		const imagen = document.createElement('picture');
		imagen.innerHTML = `
      
        <source srcset="assets/imgs/gallery/thumb/${i}.jpeg type="image/jpeg">
        <source srcset="assets/imgs/gallery/thumb/${i}.webp type="image/webp">
        <img loading="lazy" width="200" height="300" src="assets/imgs/gallery/thumb/${i}.jpg" alt="Imagen ${i}">
      
      `;
		slide.appendChild(imagen);

		imagen.onclick = function () {
			mostrarImagen(i);
		};

		galleryContainer.appendChild(slide);
	}
  
  // Select all slides
  const slides = document.querySelectorAll('.slide');
  
  // loop through slides and set each slides translateX property to index * 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
  });
  
  // select next slide button
  const nextSlide = document.querySelector('.btn-next');
  
  // current slide counter
  let curSlide = 0;
  // maximum number of slides
  let maxSlide = slides.length - 1;
  
  // add event listener and navigation functionality
  nextSlide.addEventListener('click', function () {
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
const prevSlide = document.querySelector('.btn-prev');

// add event listener and navigation functionality
prevSlide.addEventListener('click', function () {
  // check if current slide is the first and reset current slide to last
	if (curSlide === 0) {
    curSlide = maxSlide;
	} else {
    curSlide--;
	}
	//   move slide by 100%
	slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
	});
});
}

function mostrarImagen(i) {
  const imagen = document.createElement('picture');
	imagen.innerHTML = `
  
  <img loading="lazy" width="200" height="300" src="assets/imgs/gallery/big/${i}.jpg" alt="Imagen ${i}">
  `;
  
	// Crea el overlay para mostrar la imagen
	const overlay = document.createElement('div');
	overlay.appendChild(imagen);
	overlay.classList.add('overlay');
	overlay.onclick = function () {
    const body = document.querySelector('body');
		body.classList.remove('fijar-body');
		overlay.remove();
	};
  
	// Boton para cerrar el Modal
	const cerrarModal = document.createElement('p');
	cerrarModal.textContent = 'X';
	cerrarModal.classList.add('btn-cerrar');
	cerrarModal.onclick = function () {
    const body = document.querySelector('body');
		body.classList.remove('fijar-body');
		overlay.remove();
	};

	overlay.appendChild(cerrarModal);

	// Mostrar en el HTML
	const body = document.querySelector('body');
	body.appendChild(overlay);
	body.classList.add('fijar-body');
}
