'use strict';

document.addEventListener("DOMContentLoaded", function() {

	//----------------------typePassword-----------------------
	const typePassword = (typeSelector) => {
		let type = document.querySelectorAll(typeSelector);

		type.forEach(item => {
			let buttonSelector = item.querySelector('button');
			let inputSelector = item.querySelector('input');

			buttonSelector.addEventListener('click', function(e) {
					e.preventDefault();
					buttonSelector.classList.toggle('hidden');
					inputSelector.setAttribute('type', 'password');
					inputSelector.classList.toggle('text');

					let classText = item.querySelector('.text');

					if (classText) {
						item.querySelector('.text').setAttribute('type', 'text');
					}


			});
		});
	};
	typePassword('.typePassword');


	//----------------------SLIDER-hero----------------------
		// var mySwiper = new Swiper('.hero__slider', {
		// 	slidesPerView: 1,
		// 	spaceBetween: 30,
		// 	loop: true,
		// 	effect: 'fade',
		// 	autoplay: {
		// 		delay: 5000,
		// 	},
		// 	pagination: {
		// 		el: '.hero__pagination',
		// 		clickable: 'true',
		// 	},
		// 	navigation: {
		// 		nextEl: '.hero__next',
		// 		prevEl: '.hero__prev',
		// 	},
		// 	breakpoints: {
		// 		320: {
		// 			slidesPerView: 2,
		// 			spaceBetween: 20
		// 		},
		// 	}
		// });

	//----------------------SCROLL-----------------------
		const scrollTo = (scrollTo) => {
			let list = document.querySelector(scrollTo);
			list = '.' + list.classList[0]  + ' li a[href^="#"';
	
			document.querySelectorAll(list).forEach(link => {
	
				link.addEventListener('click', function(e) {
						e.preventDefault();
						const scrollMenu = document.querySelector(scrollTo);
	
						let href = this.getAttribute('href').substring(1);
	
						const scrollTarget = document.getElementById(href);
	
						// const topOffset = scrollMenu.offsetHeight;
						const topOffset = 70;
						const elementPosition = scrollTarget.getBoundingClientRect().top;
						const offsetPosition = elementPosition - topOffset;
	
						window.scrollBy({
								top: offsetPosition,
								behavior: 'smooth'
						});
	
						
						let button = document.querySelector('.hamburger'),
								nav = document.querySelector('.header__nav'),
								header = document.querySelector('.header');
	
						button.classList.remove('hamburger--active');
						nav.classList.remove('header__nav--active');
						header.classList.remove('header--menu');
				});
			});
		};
		// scrollTo('.header__nav');
	
	//----------------------FIXED-HEADER-----------------------
		const headerFixed = (headerFixed, headerActive) => {
			const header =  document.querySelector(headerFixed),
						active = headerActive.replace(/\./, '');
	
			window.addEventListener('scroll', function() {
				const top = pageYOffset;
				
				if (top >= 90) {
					header.classList.add(active);
				} else {
					header.classList.remove(active);
				}
	
			});
	
		};
		// headerFixed('.header', '.header--active');
	
	//----------------------HAMBURGER-----------------------
		const hamburger = (hamburgerButton, hamburgerNav, hamburgerHeader) => {
			const button = document.querySelector(hamburgerButton),
						nav = document.querySelector(hamburgerNav),
						header = document.querySelector(hamburgerHeader);
	
			button.addEventListener('click', (e) => {
				button.classList.toggle('hamburger--active');
				nav.classList.toggle('header__nav--active');
				header.classList.toggle('header--menu');
			});
	
		};
		// hamburger('.hamburger', '.header__nav', '.header');
		
	//----------------------MODAL-----------------------
		// const modals = (modalSelector) => {
		// 	const	modal = document.querySelectorAll(modalSelector);

		// 	if (modal) {
		// 		let i = 1;

		// 		modal.forEach(item => {
		// 			const wrap = item.id;
		// 			const link = document.querySelector('.' + wrap);
		// 			let close = item.querySelector('.close');

		// 			link.addEventListener('click', (e) => {
		// 				if (e.target) {
		// 					e.preventDefault();
		// 				}
		// 				item.style.display = 'flex';
		// 				document.body.classList.add('modal--open')
		// 			});

		// 			close.addEventListener('click', () => {
		// 				item.style.display = 'none';
		// 				document.body.classList.remove('modal--open');
		// 			});

		// 			item.addEventListener('click', (e) => {
		// 				if (e.target === item) {
		// 					item.style.display = 'none';
		// 					document.body.classList.remove('modal--open');
		// 				}
		// 			});
		// 		});
		// 	}

		// };
		// modals('.modal');

	//----------------------ADD-INPUT-----------------------
		const adminAdd = (adminAddInput) => {
			const inputAdd = document.querySelectorAll(adminAddInput);
			let i = 1;

			inputAdd.forEach(item => {
				const elem = 'form__add--' + i++;
				item.classList.add(elem);

				let inputId = item.id = (elem);
				let inputParent = document.querySelector('#' + inputId);
				let inputButton = inputParent.querySelector('button');

				const inputDelete = inputParent.querySelectorAll('.form__nav_button--delete');
				// console.log(inputDelete);

				inputButton.addEventListener('click', (e) => {
					e.preventDefault();
					let parent = document.querySelector('#' + inputId);
					let elem = inputParent.querySelector('.form__add_elem');
					let clone = elem.cloneNode(true);
					parent.append(clone);
				});

			// inputDelete.forEach(item => {
			// 	item.addEventListener('click', (e) => {
			// 		item.parentElement.parentElement.remove();
			// 	});
			// });

			});
		};
		adminAdd('.form__add');

});
	