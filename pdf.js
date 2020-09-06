

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

	window.print();

	// const element = document.getElementById('container');
	// html2pdf().from(element).set({ html2canvas: { scale: 1 } }).save();


}

window.onload = function () { 
	setTimeout(onLoad, 3000);
}

