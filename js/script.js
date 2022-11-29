 new Swiper('.speakers__swiper',{
	navigation: {
		nextEl:'.swiper-button-next',
		prevEl:'.swiper-button-prev'
	},
	slidesPerView:1,
	initialSlide:2,
	breakpoints:{
		1600:{
			slidesPerView:2.51,
			initialSlide:3,
		}
	}
	// spaceBetween:30
 })