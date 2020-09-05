function onLoad(){

	let htmlids = document.querySelectorAll('*[id]');
	let arrOfId = Array.prototype.map.call( htmlids, function(elem) {
		return elem.id;
	});

	for(i=0;i<arrOfId.length;i++){
		if(arrOfId[i].includes('txt')){
			document.getElementById(arrOfId[i]).innerText = localStorage.getItem(arrOfId[i]);
		}
	}

}

window.onload = function () { 
	setTimeout(onLoad, 4000);
}
