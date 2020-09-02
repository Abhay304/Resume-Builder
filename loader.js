$(document).ready(function () {
	$('.mbnav').on('click', function () {
		$('.navblock').slideToggle();
	});

	$('a').on('click', function (event){

		var hash = this.hash; 
		$('html').animate({
			scrollTop: $(hash).offset().top
		},800)
	});


});


class BuildResume{
	construtor(){}

	add(className){
		let childDiv = document.createElement('div');
		let i = parseInt(document.getElementsByClassName(className)[0].childElementCount);

		if(className =='cert-div' && i <3){
			childDiv.innerHTML=`<div class='form-group col-md-6 col-sm-6'><label>${i+1}</label><input type='text' class='form-control'></div>`
		}else if(className =='skill-div'){
			childDiv.innerHTML=`<div class='form-group col-md-2 col-sm-2'><label>Skills ${i+1}</label><input type='text' class='form-control'></div>`;
		}else if(className=='project-div' && i <3){
			childDiv.innerHTML=`<div class='row'><div class='form-group col-md-4 col-sm-4'><label>Prjoect Name</label><input type='text' class='form-control'></div><div class='form-group col-md-6 col-sm-6'><label>Prjoect Url</label><input type='text' class='form-control'></div><div class='form-group col-md-6 col-sm-6'><label>Project Description</label><input type='text' class='form-control'></div></div>`
		}else{
			alert('Currently this website is in Beta Stage, you can only add upto 3 Section.')
		}
		
		let parentDiv =document.getElementsByClassName(className)[0];
		parentDiv.append(childDiv);
	}
}


let elem = new BuildResume();

function addElm(className){
	elem.add(className);
}