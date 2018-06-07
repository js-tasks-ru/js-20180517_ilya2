'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
	let rows = table.querySelectorAll('tbody tr');
	
	for (let i = 0; i < rows.length; i++) {
		
		let availability = rows[i].lastElementChild.dataset.available;
		let gender = rows[i].children[2].textContent;
		let age = +rows[i].children[1].textContent;
		
		if (availability === 'true') {rows[i].classList.add('available');}
		if (availability == 'false') {rows[i].classList.add('unavailable');}
		if (gender === 'm') {rows[i].classList.add('male');}
		if (gender === 'f') {rows[i].classList.add('female');}
		if (age < 18) {rows[i].style.textDecoration='line-through';}
		// хоть тру, хоть фолс - все равно элемент не отображатеся...
		if (!rows[i].hasAttribute('hidden')) {rows[i].setAttribute('hidden', 'false')}
	
	}
}











