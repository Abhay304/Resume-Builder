

function onLoad(){

	let htmlids = document.querySelectorAll('*[id]');
	let arrOfId = Array.prototype.map.call( htmlids, function(elem) {
		return elem.id;
	});

	for(i=0;i<arrOfId.length;i++){
		if(arrOfId[i].includes('txt')){
			document.getElementById(arrOfId[i]).innerText = localStorage.getItem(arrOfId[i]);
		}

		if(arrOfId[i].includes('txtOther') && !localStorage.getItem(arrOfId[i])){
			document.getElementById(arrOfId[i]).style.display="none";
		}	
	}


	if(localStorage.getItem('txtstartDate1') && localStorage.getItem('txtEndDate1')){
		document.getElementById('txtWrkDate1').innerText = localStorage.getItem('txtstartDate1') +" - "+ localStorage.getItem('txtEndDate1');
	}

	if(localStorage.getItem('txtstartDate2') && localStorage.getItem('txtEndDate2')){
		document.getElementById('txtWrkDate2').innerText = localStorage.getItem('txtstartDate2') +" - "+ localStorage.getItem('txtEndDate2');
	}

	if(localStorage.getItem('txtEdustartDate1') && localStorage.getItem('txtEduEndDate1')){
		document.getElementById('txtEducationDate1').innerText = localStorage.getItem('txtEdustartDate1') +" - "+ localStorage.getItem('txtEduEndDate1');
	}

	if(localStorage.getItem('txtEdustartDate2') || localStorage.getItem('txtEduEndDate2')){
		document.getElementById('txtEducationDate2').innerText = localStorage.getItem('txtEdustartDate2') + localStorage.getItem('txtEduEndDate2');
	}

	window.print();

	// const element = document.getElementById('container');
	// html2pdf().from(element).set({ html2canvas: { scale: 1 } }).save();


}

window.onload = function () { 
	setTimeout(onLoad, 2000);
	// onLoad();
}
