/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
function find (obj, value) {
	
	function findIn(obj, value, path) {
		
		for (let key in obj) {
			if (obj[key] === value) {
				answ.push(path + key);
			}
			if (typeof obj[key] === 'object') {
				let pathNew = path + key + '.';
				findIn(obj[key], value, pathNew);
			}
			
		}
		
	}

	let answ = [];
	let path = '';
	
	findIn(obj, value, path);
	
	if (answ.length == 0) return null;
	if (answ.length == 1) return answ[0];
	return answ;
	
}