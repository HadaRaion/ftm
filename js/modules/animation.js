import gsap from 'gsap';

const animationFTM = () => {
	const ftmLetters = document.querySelectorAll('#letter_film_i, #letter_film_l, #letter_film_m');
	const tvLetters = document.querySelectorAll('#letter_tv_e1, #letter_tv_l, #letter_tv_e2, #letter_tv_v, #letter_tv_i1, #letter_tv_s, #letter_tv_i2, #letter_tv_o, #letter_tv_n');
	const multimediaLetters = document.querySelectorAll(' #letter_media_u, #letter_media_l, #letter_media_t, #letter_media_i1, #letter_media_m2, #letter_media_e, #letter_media_d, #letter_media_i2, #letter_media_a');

	const tl = gsap.timeline({
		delay: 1.5,
		defaults: {
			duration: 1,
			ease: 'power1.out',
		},
	});

	tl.from(['#letter_film_f', '#letter_tv_t', '#letter_media_m1'], { fill: '#000000' }, '-=0.7');
	tl.from('#television', { duration: 0.4, x: 40 }, '-=0.7');
	tl.from('#multimedia', { duration: 0.6, x: 84 }, '-=0.9');
	// tl.from(ftmLetters, { autoAlpha: 0, xPercent: -20, stagger: 0.1 }, '-=0.7');
	// tl.from(tvLetters, { autoAlpha: 0, xPercent: -20, stagger: 0.1 }, '-=1.1');
	// tl.from(multimediaLetters, { autoAlpha: 0, xPercent: -25, stagger: 0.1 }, '-=1.5');
	tl.from(ftmLetters, { autoAlpha: 0, stagger: 0.1 }, '-=0.7');
	tl.from(tvLetters, { autoAlpha: 0, stagger: 0.1 }, '-=1.2');
	tl.from(multimediaLetters, { autoAlpha: 0, stagger: 0.1 }, '-=1.7');
	tl.from('.intro__text > p', { autoAlpha: 0, yPercent: 101, stagger: 0.1 }, '-=1.5');
	return tl;
};

const animationScroll = () => {
	const scrollIcon = document.querySelector('.scroll-down-icon');
	gsap.to(scrollIcon, {
		y: 5,
		repeat: -1,
		yoyo: true,
		yoyoEase: true,
	});
};

export { animationFTM, animationScroll };
