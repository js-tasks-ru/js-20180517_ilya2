'use strict';

/**
 * Функция возвращает строкой, сколько времени осталоьс до события
 * @param {Date} when - дата события
 * @return {string} - строка с указанием времени до начала события
 */
function getBeforeTime(when) {
   let current = Date.now(); // обязательно получать текущую дату через эту функцию. Иначе тесты работать не будут
	
let whenArr = getDateArr(when);
let currentArr = getDateArr(new Date (current));
let answ;
let diff;

if (when - current <= 0) {
	answ = 'событие завершилось';
	return answ;
};

diff = whenArr.sec - currentArr.sec;
let sec = diff >= 0 ? diff : 60 + diff;
if (diff < 0) {whenArr.min  -= 1;}

diff = whenArr.min - currentArr.min;
let min = diff >= 0 ? diff : 60 + diff;
if (diff < 0) {whenArr.hrs -= 1;}

diff = whenArr.hrs - currentArr.hrs;
let hrs = diff >= 0 ? diff : 24 + diff;
if (diff < 0) {whenArr.date -= 1;}

diff = whenArr.date - currentArr.date;
let days;
if (diff >= 0) {days = diff;}
else {
	let lastDateOfCurrnetMonth = new Date(new Date(currentArr.year, currentArr.month+1) - 1000*60*60*24).getDate();
	days = lastDateOfCurrnetMonth - currentArr.date + whenArr.date;
	whenArr.month -= 1;
};

diff = whenArr.month - currentArr.month;
let months = diff >=0 ? diff : 12 + diff;
if (diff < 0) {whenArr.year -= 1;}

let years = whenArr.year - currentArr.year;

years = (years) ? years + ' г., ' : '';
months = (months) ? months + ' мес., ' : '';
days = (days) ? days + ' д., ' : '';
hrs = (hrs) ? hrs + ' ч., ' : '';
min = (min) ? min + ' мин., ' : '';
sec = (sec) ? sec + ' сек., ' : '';
answ = (years + months + days + hrs + min + sec).slice(0,-2);

return answ;	
}

function getDateArr(date) {
	let dateArr = {};
	
	dateArr.sec = date.getSeconds();
	dateArr.min = date.getMinutes();
	dateArr.hrs = date.getHours();
	dateArr.date = date.getDate();
	dateArr.month = date.getMonth();
	dateArr.year = date.getFullYear();
	
	return dateArr;
} 