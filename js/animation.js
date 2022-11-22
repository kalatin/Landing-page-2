let animItems = document.querySelectorAll('._anim-item');

if(animItems.length > 0) {
	window.addEventListener('scroll',animOnScroll)
	function animOnScroll(params) {
		for (let i = 0; i < animItems.length; i++) {
			const animItem = animItems[i];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if(animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - animItemHeight / animStart;
			}

			if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_anim-active');
			}else {
				if(!animItem.classList.contains('_anim-noHide')) {
					animItem.classList.remove('_anim-active');
				}
			}
		}
	}
	function offset(elem) {
		const rect = elem.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return{top:rect.top + scrollTop,left:rect.left + scrollLeft}
	}

	setTimeout(() => {
		animOnScroll()
	},300);
}