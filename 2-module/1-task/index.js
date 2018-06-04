/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone (obj) {
	
	let cloneObj = {};
	
	if (typeof obj !== 'object') return obj;
	if (obj === null) return null;
	
	for (let key in obj) {
		
		if (typeof obj[key] === 'object') {
			cloneObj[key] = clone(obj[key]);
		}
		
		else {
			cloneObj[key] = obj[key];
		};
	};
	
	return cloneObj;

}