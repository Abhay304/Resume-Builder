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

	var inptArr=['txtProjectName1','txtProjectDes1','txtProjectUrl1','txtProjectName2','txtProjectDes2','txtProjectUrl2'
	,'txtProjectName3','txtProjectDes3','txtProjectUrl3']

	var returnArr = inptArr.filter(id =>{
		return document.getElementById(id).innerText != "";
	})

	if(returnArr.length==0){
		document.getElementById('projectSec').style.display="none";
	}
	
	window.print();

}

window.onload = function () { 
	let color = localStorage.getItem('color')
	document.getElementById('txtName').style.color=color;
	var h2Elements = document.getElementsByTagName("h2");
	for(var i = 0; i < h2Elements.length; i++) {
		h2Elements[i].style.color = color;
	}

	var classinfo = document.getElementsByTagName("a");
	for(var i = 0; i < classinfo.length; i++) {
		classinfo[i].style.color = color;
	}

	setTimeout(onLoad, 2000);
	setTimeout(closeWindow, 20000);
}


function closeWindow(){
	window.close();
}


