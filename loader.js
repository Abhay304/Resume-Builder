class BuildResume{
	construtor(){}

	add(className){
		let childDiv = document.createElement('div');
		let i = parseInt(document.getElementsByClassName(className)[0].childElementCount);

		if(className =='cert-div' && i <6){
			let classtoAdd = ['form-group','col-md-6','col-sm-6'];
			childDiv.classList.add(...classtoAdd);
			childDiv.innerHTML=`<label>${i+1}</label><input type='text' class='form-control'>`

		}else if(className =='skill-div' && i<12){
			let classtoAdd = ['form-group','col-md-3','col-sm-3'];
			childDiv.classList.add(...classtoAdd);
			
			childDiv.id=`skill${i+1}`;
			childDiv.innerHTML=`<label>Skills ${i+1}</label><span class="icon-remove"><a class='glyphicon glyphicon-remove-sign'></a><input type='text' class='form-control' id=''></span>`;

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


document.querySelector('.skill-div').addEventListener('click', (e) =>{
	if(e.target.tagName=="A"){
		// console.log(e.path[2].id);
		let parentDiv = document.querySelector('.skill-div');
		let id =e.path[2].id;
		deltedDiv = document.getElementById(id);
		parentDiv.removeChild(deltedDiv);
	}
});



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
