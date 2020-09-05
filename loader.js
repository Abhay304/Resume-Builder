class BuildResume{
	construtor(){}

	add(className){
		let childDiv = document.createElement('div');
		let i = parseInt(document.getElementsByClassName(className)[0].childElementCount);

		if(className =='cert-div' && i <6){
			let classtoAdd = ['form-group','col-md-6','col-sm-12'];
			childDiv.classList.add(...classtoAdd);
			childDiv.innerHTML=`<label>${i+1}</label><input type='text' class='form-control' id='txtOther${i+1}'>`

		}else if(className =='skill-div' && i<12){
			let classtoAdd = ['form-group','col-md-3','col-sm-12'];
			childDiv.classList.add(...classtoAdd);
			
			childDiv.id=`skill${i+1}`;
			childDiv.innerHTML=`<label>Skills ${i+1}</label><span class="icon-remove"><a class='glyphicon glyphicon-remove-sign'></a><input type='text' class='form-control' id='txtskill${i+1}'></span>`;

		}else{
			alert('Sorry! You cannot add more , currently this website is in Beta Stage')
		}
		
		let parentDiv =document.getElementsByClassName(className)[0];
		parentDiv.append(childDiv);
	}

	del(className){
		let lastChild  = document.querySelector('.'+className).lastElementChild;
		let parentDiv = document.querySelector('.'+className);
		parentDiv.removeChild(lastChild);
	}

}


let elem = new BuildResume();

function addElm(className){
	elem.add(className);
}

function delElm(className){
	elem.del(className);
}

//Event Delegation - for deletion of skills
document.querySelector('.skill-div').addEventListener('click', (e) =>{
	if(e.target.tagName=="A"){
		// console.log(e.path[2].id);
		let parentDiv = document.querySelector('.skill-div');
		let id =e.path[2].id;
		deltedDiv = document.getElementById(id);
		parentDiv.removeChild(deltedDiv);
	}
});


//For Saving Data

function SaveData(){

	let htmlids = document.querySelectorAll('*[id]');
	let arrOfId = Array.prototype.map.call( htmlids, function(elem) {
		return elem.id;
	});

	for(i=0;i<arrOfId.length;i++){
		if(arrOfId[i].includes('txt')){
			var valueOfId = document.getElementById(arrOfId[i]).value;
			localStorage.setItem(arrOfId[i], valueOfId);
		}
	}
	
	alert('DATA SAVED LOCALLY.');

}


function onLoad(){

	for(i=2;i<12;i++){
		if(localStorage.getItem('txtskill'+i)){
			addElm('skill-div');
		}
	}
	for(i=2;i<6;i++){
		if(localStorage.getItem('txtOther'+i)){
			addElm('cert-div');
		}
	}
	let htmlids = document.querySelectorAll('*[id]');
	let arrOfId = Array.prototype.map.call( htmlids, function(elem) {
		return elem.id;
	});

	for(i=0;i<arrOfId.length;i++){
		if(arrOfId[i].includes('txt')){
			document.getElementById(arrOfId[i]).value = localStorage.getItem(arrOfId[i]);
		}
	}

}


window.onload = function () { 
	setTimeout(onLoad, 1000);
}


// localStorage.setItem("lastname", "Smith");

// for Nav Bar
$(document).ready(function () {
	$('.mbnav').on('click', function () {
		$('.navblock').slideToggle();
	});
});


// for Next and previous
$('.btnNext').click(function(){
	$('.nav-tabs > .active').next('li').find('a').trigger('click');
});

$('.btnPrevious').click(function(){
	$('.nav-tabs > .active').prev('li').find('a').trigger('click');
});
