var hamburger = document.getElementById('hamburger');

hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
	document.getElementById('main-panel').classList.toggle('open');
	document.getElementById('hamburger').classList.toggle('open');
};