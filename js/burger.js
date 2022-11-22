let headBurger = document.querySelector('.header__burger');

headBurger.addEventListener('click',() => {
	let headMenu = document.querySelector('.header__menu');
	let header = document.querySelector('.header');

	headBurger.classList.toggle('active');
	headMenu.classList.toggle('open');

	//------------------------------------------
	blockBodyScroll()

	window.addEventListener('resize',() => {
		if(document.documentElement.clientWidth > 1024) {
			headBurger.classList.remove('active');
			headMenu.classList.remove('open');
		}
	})
})