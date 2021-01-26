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

	//----------------------TABS-JS----------------------
		const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
			let check = document.querySelector(headerSelector);

			if (check) {
				const header = document.querySelector(headerSelector),
							tab = document.querySelectorAll(tabSelector),
							content = document.querySelectorAll(contentSelector);
			
				function hideTabContent() {
					content.forEach(item => {
						item.style.display = "none";
					});
			
					tab.forEach(item => {
						item.classList.remove(activeClass);
					});
				}
			
				function showTabContent(i = 0) {
					content[i].style.display = "block";
					tab[i].classList.add(activeClass);
				}
			
				hideTabContent();
				showTabContent();
			
				header.addEventListener('click', (e) => {
					// e.preventDefault();
					const target = e.target;
					if (target && 
						(target.classList.contains(tabSelector.replace(/\./, '')) || 
						target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
						tab.forEach((item, i) => {
							if (target == item || target.parentNode == item) {
								hideTabContent();
								showTabContent(i);
							}
						});
					}
				});
			}
		};
		tabs('.tabs', '.tabs__item', '.tabs__wrap', 'section__bot_nav-active');

	//----------------------MODAL-----------------------
		const modals = (modalSelector) => {
			const	modal = document.querySelectorAll(modalSelector);

			if (modal) {
				let i = 1;

				modal.forEach(item => {
					const wrap = item.id;
					const link = document.querySelector('.' + wrap);
					let close = item.querySelector('.close');
					if (link) {
						link.addEventListener('click', (e) => {
							if (e.target) {
								e.preventDefault();
							}
							item.classList.add('active');
						});
					}

					if (close) {
						close.addEventListener('click', () => {
							item.classList.remove('active');
						});
					}

					item.addEventListener('click', (e) => {
						if (e.target === item) {
							item.classList.remove('active');
						}
					});
				});
			}

		};
		modals('.modal');

});
	