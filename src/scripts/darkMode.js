export function darkMode() {
	let element = document.body;
	element.classList.toggle('light-theme');
	let services = document.querySelectorAll('.card');
	services.forEach((service) => {
		service.classList.toggle('card-light-theme');
	});
	let moon = document.getElementById('moon');
	let sun = document.getElementById('sun');

	if (moon.style.display !== 'none') {
		moon.style.display = 'none';
		sun.style.display = 'block';
	} else {
		moon.style.display = 'block';
		sun.style.display = 'none';
	}
}
document.getElementById('darkMode').addEventListener('click', darkMode);
