M.AutoInit();

var requestUrl2 = 'https://excuser.herokuapp.com/v1/excuse/'
var greetings = ['Good morning,', 'Good afternoon,', 'Good evening,'];
var informalGreeting = ['Hey,', 'Hi,', 'Whats shakin bacon', 'Yo'];
var emailClosing = ['Sincerely,', 'See you soon,', 'Thank you for understanding'];
var apologies = ['Im sooo sorry', 'Sorry in advance', 'I apologize for any inconvience']


// M.AutoInit();



///  Individual element Init
var dropBtn = document.querySelector('#dropBtn');

function init() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var dropdownOptions = {
    'hover': true
  }
  dropBtn = M.Dropdown.init(elems, dropdownOptions);
}

init();


var instance = M.Dropdown.getInstance(dropdown1);

var destroyBtn = document.querySelector('#destroy');

destroyBtn.addEventListener('click', function (event) {
  // instance.destroy();
  console.log("destroy_btn")
})


<<<<<<< HEAD


//random excuse, to add category and number -> add {category}/{number} to the url
var newExBtn = document.querySelector('#newExBtn')
var copyBtn = document.querySelector('#copyBtn')
var excuseText = document.querySelector('#excuse-input')

function newExcuse() {
  fetch(requestUrl2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      excuseText.value = data[0].excuse
    });
}
=======

//random excuse, to add category and number -> add {category}/{number} to the url
var newExBtn=document.querySelector('.newExBtn')
var copyBtn=document.querySelector('#copyBtn')
var excuseText = document.querySelector('#excuse-input')


>>>>>>> dev
//copy button
copyBtn.addEventListener('click', function (event) {
  navigator.clipboard.writeText(excuseText.value);
})
//new excuse button
<<<<<<< HEAD
newExBtn.addEventListener('click', function (event) {
=======
newExBtn.addEventListener('click',function(event){
  var category = document.querySelector('#category').value
  var requestUrl2= 'https://excuser.herokuapp.com/v1/excuse/'+category
  console.log(category)
  function newExcuse(){
fetch(requestUrl2)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  excuseText.value = data[0].excuse
  console.log(data)
});
}
>>>>>>> dev
  newExcuse()
})

//synonym app starts here
var synTable = document.querySelector('#synTable')
var synBtn = document.querySelector('#synBtn')
var synUL = document.querySelector('#synonyms')
var synInput = document.querySelector('#synInput')

function synonymRun() {
  var requestUrl = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/' + synInput.value + '?key=02dc8eac-3c8b-4ee7-98f5-c159035179dd';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var synArray = data[1].meta.syns[0]

      for (let i = 0; i < synArray.length; i++) {
        var synonym = document.createElement("li")
        synonym.textContent = synArray[i]
        synUL.appendChild(synonym)
        //maximum 10 synonyms
        if (i === 10) { break; }
      }
    });
<<<<<<< HEAD
}

synBtn.addEventListener('click', function (event) {


  synUL.innerHTML = '';
  synonymRun()
  //deletes the word from the box
  synInput.value = ""
})
=======
  }
  
  synBtn.addEventListener('click',function(event){
    
    //resets the list
    synUL.innerHTML ='';
    synonymRun()
    //deletes the word from the box
    synInput.value=""
  })
>>>>>>> dev

  //synonym app ends here
