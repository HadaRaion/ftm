window.addEventListener('load', detectIEEdge);

function detectIEEdge() {
	let ua = window.navigator.userAgent;

	let msie = ua.indexOf('MSIE ');
	if (msie > 0) {
		// IE 10 or older
		alert('Internet Explorer를 지원하지 않습니다. \n\n안전하고 쾌적한 인터넷 환경을 위해 크롬, 파이어폭스, 엣지 브라우저를 사용해주세요.');
	}

	let trident = ua.indexOf('Trident/');
	if (trident > 0) {
		// IE 11
		alert('Internet Explorer를 지원하지 않습니다. \n\n안전하고 쾌적한 인터넷 환경을 위해 크롬, 파이어폭스, 엣지 브라우저를 사용해주세요.');
	}
}
