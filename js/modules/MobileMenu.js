import gsap from 'gsap';

class MobileMenu {
	constructor() {
		this.openButton = document.querySelector('.burger');
		this.menu = document.querySelector('.header__menu-wrapper');
		this.menuLinks = document.querySelectorAll('.header__menu-wrapper ul li');
		this.mainMenuLinks = document.querySelectorAll('.header__menu-wrapper > ul > li > a');
		this.events();
	}

	events() {
		this.openButton.addEventListener('click', () => this.openMenu());
		this.mainMenuLinks.forEach(link => {
			link.addEventListener('click', () => this.closeMenu());
		});
	}

	openMenu() {
		this.openButton.classList.toggle('open');
		this.menu.classList.toggle('header__menu-wrapper--active');
		const tl = gsap.timeline();
		tl.from(this.menuLinks, { autoAlpha: 0, xPercent: 10, clearProps: 'all', stagger: 0.1 });
		tl.start();
	}

	closeMenu() {
		this.openButton.classList.toggle('open');
		this.menu.classList.toggle('header__menu-wrapper--active');
	}
}

export default MobileMenu;
