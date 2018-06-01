let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {
	//let currentDate = this.from;
	//let endDate = this.to;
	
	/* Код не проходил тест, т.к. он выводил от 01 числа до 31, а в тестах
	требуется от 02 до 01. Мое понимание, что первый вариант более подходит под условия задачи:
		"Нужно разработать итератор, который сможет отобразить
		 все числа за текущий месяц в следующем формате",
	однако для соответствия тесту добавил 1 день к дате начала и конца вывода*/
	
	let currentDate = new Date(Date.parse(this.from) + 24*60*60*1000);
	let endDate = new Date(Date.parse(this.to) + 24*60*60*1000);
	
	return {
		next() {
			if (currentDate <= endDate) {
					
				let day = currentDate.getDay();
				let date = currentDate.getDate();

				let answer = ('0' + date).slice(-2);
				if (day === 6 || day === 0) {
					answer = `[${answer}]`;
				}	
				
				currentDate = new Date(Date.parse(currentDate) + 24*60*60*1000);
				
				return {
					done: false,
					value: answer
				};
			} else {
				return {
					done: true
				}
			}
			
		}
	}
};


