import fullpageScroll from 'fullpage.js/vendors/scrolloverflow';
import fullpage from 'fullpage.js';

import { animationFTM, animationScroll } from './animation';

let ftmFullpage = new fullpage('#fullpage', {
	licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
	navigation: false,
	css3: true,
	menu: '#ftmMenu',
	anchors: ['about', 'curriculum', 'professors', 'q&a', 'test'],
	scrollOverflow: true,
	// normalScrollElements: '.board-main',
	onLeave: function (origin, destination, direction) {
		if (destination.index === 0) {
			console.log('페이지얌');
			animationFTM();
		}
	},
});
