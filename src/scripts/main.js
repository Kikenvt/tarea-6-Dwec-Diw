/**
 *  **Autor**: Enrique Fernández - Campoamor Fernández
 * **Github**: https://github.com/Kikenvt/tarea-5-Dwec-Diw
 */
import { createGallery } from './slider.js';
import { darkMode } from './darkMode.js';

document.addEventListener('DOMContentLoaded', function () {
	createGallery();
	darkMode();
});


// Loading screen

window.addEventListener('load', function () {
	const loading = document.getElementById('loading');
	loading.style.transform = 'scale(3)';
	loading.style.opacity = '0';
	setTimeout(function () {
		loading.style.display = 'none';
	}, 2300); // same duration as the transition in the CSS
});

// Navbar

const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-list');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
	hamburger.classList.toggle('active');
	navMenu.classList.toggle('active');
}

document
	.querySelector('.hamburger-menu')
	.addEventListener('click', function () {
		this.classList.toggle('open');
	});

window.addEventListener('scroll', function () {
	const hamburgerMenu = document.querySelector('.hamburger-menu');
	const navMenu = document.querySelector('.nav-list');
	if (hamburgerMenu.classList.contains('open')) {
		hamburgerMenu.classList.remove('open');
		navMenu.classList.remove('active');
	}
});

// Scroll navigation

function scrollNav() {
	const enlaces = document.querySelectorAll('.nav-item a');

	enlaces.forEach((enlace) => {
		enlace.addEventListener('click', function (e) {
			e.preventDefault();

			const seccionScroll = e.target.attributes.href.value;
			const seccion = document.querySelector(seccionScroll);
			seccion.scrollIntoView({ behavior: 'smooth' });
		});
	});
}
