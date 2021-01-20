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


});
	