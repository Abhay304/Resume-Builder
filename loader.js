class BuildResume{
	construtor(){}

	add(className){
		let childDiv = document.createElement('div');
		let i = parseInt(document.getElementsByClassName(className)[0].childElementCount);

		if(className =='cert-div' && i <6){
			childDiv.innerHTML=`<div class='form-group col-md-6 col-sm-6'><label>${i+1}</label><input type='text' class='form-control'></div>`
		}else if(className =='skill-div' && i<12){	
			childDiv.classList.add("form-group");
			childDiv.classList.add("col-md-3");
			childDiv.classList.add("col-sm-3");
			childDiv.id=`skill${i+1}`;
			childDiv.innerHTML=`<label>Skills ${i+1}</label><span class="icon-remove"><a class='glyphicon glyphicon-remove-sign icon-remove' onclick='remove(event)'></a><input type='text' class='form-control' id=''></span>`;
		}else if(className=='project-div' && i <3){
			childDiv.innerHTML=`<div class='row'><div class='form-group col-md-4 col-sm-4'><label>Prjoect Name</label><input type='text' class='form-control'></div><div class='form-group col-md-6 col-sm-6'><label>Prjoect Url</label><input type='text' class='form-control'></div><div class='form-group col-md-6 col-sm-6'><label>Project Description</label><input type='text' class='form-control'></div></div>`
		}else{
			alert('Sorry! You cannot add more , currently this website is in Beta Stage')
		}
		
		let parentDiv =document.getElementsByClassName(className)[0];
		parentDiv.append(childDiv);
	}
}


let elem = new BuildResume();

function addElm(className){
	elem.add(className);
}

function remove(e){
	console.log(e.path[2].id);	
	let parentDiv = document.getElementById('skillDiv');
	let id =e.path[2].id;
	deltedDiv = document.getElementById(id);
	parentDiv.removeChild(deltedDiv);

}



$(document).ready(function () {
	$('.mbnav').on('click', function () {
		$('.navblock').slideToggle();
	});
});


 $('.btnNext').click(function(){
  $('.nav-tabs > .active').next('li').find('a').trigger('click');
});

  $('.btnPrevious').click(function(){
  $('.nav-tabs > .active').prev('li').find('a').trigger('click');
});
