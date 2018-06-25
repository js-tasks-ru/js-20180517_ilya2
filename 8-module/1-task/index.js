'use strict';

/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavods'
 *      },
 *
 * @constructor
 */
// function SortableTable(items) {

    // /**
     // * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
     // */
    // this.el = document.createElement('table');

    // /**
     // * Метод выполняет сортировку таблицы
     // * @param {number} column - номер колонки, по которой нужно выполнить сортировку (отсчет начинается от 0)
     // * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
     // */
    // this.sort = function (column, desc = false) { };
// }

function SortableTable(rows) {
	let arr = rows.slice(0);
	this.el = makeTable(arr);
	let self = this;
	
	function makeTable(arr) {
		let table = document.createElement('table');
		table.classList.add('clients');
		let thead = document.createElement('thead');
		thead.classList.add('clients__header');
		let theadSrt = '<tr><td>Name</td><td>Age</td><td>Salary</td><td>City</td></tr>';
		thead.innerHTML = theadSrt;
		table.appendChild(thead);

		let tbody = document.createElement('tbody');
		tbody.classList.add('clients__tbody');
		for (let i of arr) {
			let tr = document.createElement('tr');
			tr.classList.add('clients__row'); 
			tr.innerHTML = `<tr><td>${i.name}</td><td>${i.age}</td><td>${i.salary}</td><td>${i.city}</td></tr>`;
			tbody.appendChild(tr);
		}
		table.appendChild(tbody);	
		return table;
		
	} 

	function fillTable(arr) {
		let tbody = self.el.querySelector('.clients__tbody');
		let bodyStrings = tbody.children;
		
		for (let i = 0; i < arr.length; i++) {
		let rowStr = `<tr><td>${arr[i].name}</td><td>${arr[i].age}</td><td>${arr[i].salary}</td><td>${arr[i].city}</td></tr>`;
		bodyStrings[i].innerHTML = rowStr;
		}
	}
	
	function sortArr(valNum, reverse) {
		let key = Object.keys(arr[0])[valNum];
		arr.sort((a,b) => {return a[key] >= b[key] ? 1 : -1;});
		if (reverse) arr.reverse();
		fillTable(arr);
	} 

	this.sort = sortArr;

}