'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(string) {
	
	let dataArr = findNumbers(string);
	
	dataArr.sort((a, b) => a - b);
	//return [dataArr[0], dataArr.slice(-1)[0]];
	
	let answ = {};
	answ.min = dataArr[0];
	answ.max = dataArr.slice(-1)[0];
	
	return answ;
}

function findNumbers(string) {
	
	let allNumbers = [];
	let numPosition;
	let number;
	let ifMinus;
	
	while(true) {
		numPosition = undefined;
		ifMinus = undefined;
		for (let i = 0; i <string.length; i++) {
			if (string[i] !== ' ' && !isNaN(string[i])) {
				numPosition = i; break
			} 
		}
		
		if (numPosition === undefined) return allNumbers;
		ifMinus = (string[numPosition-1] === '-') ? true : false;
		
		string = string.slice(numPosition);	
		number = parseFloat(string);
		if (ifMinus) { number *= -1; };
		
		allNumbers.push(number);
		string = string.slice(number.toString().length);
	}
	return allNumbers;
}