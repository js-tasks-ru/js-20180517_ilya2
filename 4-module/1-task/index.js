'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {
	
	let parentList = document.body.insertBefore( document.createElement('ul'), document.body.firstElementChild);
	
	friends.forEach(function(obj){
			
			let nextStr = `${obj.firstName} ${obj.lastName}`;
			
			let nextLi = document.createElement('li');
			nextLi.appendChild( document.createTextNode(nextStr) );
			
			parentList.appendChild(nextLi);
			
		});
	return parentList;
}
