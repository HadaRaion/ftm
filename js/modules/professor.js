function openTab(tabNumber) {
	const tabContent = document.querySelectorAll('.professor');
	tabContent.forEach(el => el.classList.remove('active'));
	document.getElementById(tabNumber).classList.add('active');
}

function tabMenuEffect(tabLinkNumber) {
	const tabMenu = document.querySelectorAll('.professor-nav-link');
	tabMenu.forEach(el => el.classList.remove('active'));
	document.getElementById(tabLinkNumber).classList.add('active');
}

function init() {
	const defaultProfessor = document.querySelector('.professors__list > li:first-child');
	const defaultProfessorLink = document.querySelector('.professors__nav > li:first-child > a');
	defaultProfessor.classList.add('active');
	defaultProfessorLink.classList.add('active');
}

const professorLinks = document.querySelectorAll('.professors__nav > li > a');

professorLinks.forEach((tabLink, index) => {
	tabLink.addEventListener('click', function (e) {
		e.preventDefault();
		console.log(index + 1);
		openTab(`Tab${index + 1}`);
		tabMenuEffect(`Tab${index + 1}Link`);
	});
});

window.addEventListener('load', init);

const toCardBackPage = document.querySelectorAll('.btn-to-back');
const toCardFrontPage = document.querySelectorAll('.btn-to-front');

toCardBackPage.forEach(el => {
	el.addEventListener('click', e => {
		e.preventDefault();
		e.closest('.professors__card').classList.add('active');
	});
});
