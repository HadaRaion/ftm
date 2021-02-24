import '../css/style.css';

import './modules/vhMobile';
import './modules/forIE';
import './modules/FullPage';
import './modules/professor';
import { animationFTM, animationScroll } from './modules/animation';

import MobileMenu from './modules/MobileMenu';
animationFTM();
animationScroll();

new MobileMenu();

if (module.hot) {
	module.hot.accept();
}
