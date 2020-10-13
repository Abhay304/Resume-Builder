class BuildResume {
   construtor() {}

   add(className) {
      let childDiv = document.createElement('div');
      let i = parseInt(document.getElementsByClassName(className)[0].childElementCount);

      if (className == 'cert-div' && i < 6) {
         let classtoAdd = ['form-group', 'col-md-6', 'col-sm-12'];
         childDiv.classList.add(...classtoAdd);
         childDiv.innerHTML = `<label>${i+1}</label><input type='text' class='form-control' id='txtOther${i+1}'>`

      } else if (className == 'skill-div' && i < 12) {
         let classtoAdd = ['form-group', 'col-md-3', 'col-sm-12'];
         childDiv.classList.add(...classtoAdd);

         childDiv.id = `skill${i+1}`;
         childDiv.innerHTML = `<label>Skill ${i+1}</label><span class="icon-remove"><a class='glyphicon glyphicon-remove-sign'></a><input type='text' class='form-control' id='txtskill${i+1}'></span>`;

      } else {
         alert('Sorry! You cannot add more , currently this website is in Beta Stage')
      }

      let parentDiv = document.getElementsByClassName(className)[0];
      parentDiv.append(childDiv);
   }

   del(className) {
      let lastChild = document.querySelector('.' + className).lastElementChild;
      let parentDiv = document.querySelector('.' + className);
      if(document.querySelector('.' + className).childElementCount >1){
         parentDiv.removeChild(lastChild);
      }
      
   }

}


let elem = new BuildResume();

function addElm(className) {
   elem.add(className);
}

function delElm(className) {
   elem.del(className);
}

//Event Delegation - for deletion of skills
document.querySelector('.skill-div').addEventListener('click', (e) => {
   if (e.target.tagName == "A") {
      // console.log(e.path[2].id);
      let parentDiv = document.querySelector('.skill-div');
      let id = e.path[2].id;
      deltedDiv = document.getElementById(id);
      parentDiv.removeChild(deltedDiv);
   }
});


//For Saving Data
function SaveData(e) {

   let htmlids = document.querySelectorAll('*[id]');
   let arrOfId = Array.prototype.map.call(htmlids, function(elem) {
      return elem.id;
   });

   for (i = 0; i < arrOfId.length; i++) {
      if (arrOfId[i].includes('txt')) {
         var valueOfId = document.getElementById(arrOfId[i]).value;
         localStorage.setItem(arrOfId[i], valueOfId);
      }
   }

   alert('DATA SAVED');
   MoveNext();

   if (e.target.id == "saveDataId") {
      window.open('/Resume-Builder//pdf.html','_self');
   }
}

// Restore Data on Load start
function onLoad() {

   for (i = 2; i < 12; i++) {
      if (localStorage.getItem('txtskill' + i)) {
         addElm('skill-div');
      }
   }

   for (i = 2; i < 6; i++) {
      if (localStorage.getItem('txtOther' + i)) {
         addElm('cert-div');
      }
   }

   let htmlids = document.querySelectorAll('*[id]');
   let arrOfId = Array.prototype.map.call(htmlids, function(elem) {
      return elem.id;
   });

   for (i = 0; i < arrOfId.length; i++) {
      if (arrOfId[i].includes('txt')) {
         document.getElementById(arrOfId[i]).value = localStorage.getItem(arrOfId[i]);
      }
   }
}

window.onload = function() {
   setTimeout(onLoad, 1000);
}

// Restore Data on Load end

// Validating forms start
let userInputId1 = ['txtName', 'txtNumber', 'txtEmail', 'txtAddress', 'txthobby1', 'txthobby2']

function ValidateFormTab1(e) {
   var validate = true;
   for (i = 0; i < userInputId1.length; i++) {
      if (document.getElementById(userInputId1[i]).value == '') {
         alert('Kindly Fill all the star(*) marked mandatory field for Tab1');
         validate = false;
         return false;
      } 
   }

   if(validate == true){
      SaveData(e);
      return true;
   }
}

function ValidateFormTab3(e) {
   if (document.getElementById('txtskill1').value == '') {
      alert('Kindly Fill all the star(*) marked mandatory field for Tab3');
      return false;
   } else {
      SaveData(e);
      return true;
   }
}

let userInputId2 = ['txtCollegeName1', 'txtDegree1', 'txtStudy1', 'txtEdustartDate1', 'txtEduEndDate1']

function ValidateFormTab4(e) {
   var validate = true;
   for (i = 0; i < userInputId2.length; i++) {
      if (document.getElementById(userInputId2[i]).value == '') {
         alert('Kindly Fill all the star(*) marked mandatory field for Tab4');
         validate = false;
         return false;
      } 
   }
   if(validate == true){
      SaveData(e);
      return true;
   }
}

function ValidateFormTab6(e) {
   if (document.getElementById('txtOther1').value == '') {
      alert('Kindly Fill all the star(*) marked mandatory field for Tab6');
      return false;
   } else {
      SaveData(e);
      return true;
   }
}


// Validating forms end

//Selecting Color
document.getElementById('colorPicker').addEventListener('click',(e)=>{
   if(e.target.tagName=="DIV"){

    var colorids= ['mbg6','mbg7','mbg8','mbg9','default','grey6','grey7','grey8','grey9','grey10','blue6','blue7','blue8','blue9','blue10','yellow8','green12','green13','green14','green15','yellow10','mbg5'];
    colorids.forEach(id =>{
      document.getElementById(id).innerText=""
   });
    var id=e.target.id;
    document.getElementById(id).innerText="Copied !";

    let value = e.target.getAttribute('name');
    localStorage.setItem('color', value); 
 }

})


// Selecting color end;

// for Nav Bar toggle start
$(document).ready(function() {
   $('.mbnav').on('click', function() {
      $('.navblock').slideToggle();
   });
});
// for Nav Bar toggle end

// for Next and previous start
function MoveNext() {
   $('.nav-tabs > .active').next('li').find('a').trigger('click');
}


$('.btnPrevious').click(function() {
   $('.nav-tabs > .active').prev('li').find('a').trigger('click');
});
// for Next and previous end
