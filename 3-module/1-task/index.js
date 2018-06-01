/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
	let foundUsers = ''; 

	for  (let i = 0; i < data.length; i++) {
		if (age < data[i].age) continue;
		//foundUsers.push(`${data[i].name}, ${data[i].balance}\n`);
		foundUsers += `${data[i].name}, ${data[i].balance}\n`;		
	};
	
	foundUsers = foundUsers.slice(0,-1);
	return foundUsers;
}


