/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow (m, n) {
	let answ = 1;
		
	for (i=0; i < n; i++) {
		answ *= m;
	}
	
	return answ;
}