function blockBodyScroll () {
	let documentWidth = parseInt(document.documentElement.clientWidth);
	let windowsWidth = parseInt(window.innerWidth);
	let scrollWidth = windowsWidth - documentWidth;

	document.body.classList.toggle('noScroll');
	document.body.style.paddingRight = scrollWidth + 'px';
}