var requestUrl2= 'https://excuser.herokuapp.com/v1/excuse/'
var cars = ["Good morning", "Good afternoon", "Good evening" , "Hey"];

//random excuse, to add category and number -> add {category}/{number} to the url
fetch(requestUrl2)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data)
});

//synonym app starts here
var synTable = document.querySelector('#synTable')
var synBtn = document.querySelector('#synBtn')
var synUL = document.querySelector('#synonyms')
var synInput = document.querySelector('#synInput')

function synonymRun(){
var requestUrl = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/'+ synInput.value +'?key=02dc8eac-3c8b-4ee7-98f5-c159035179dd';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var synArray = data[1].meta.syns[0]
      
      for (let i = 0; i < synArray.length; i++) {
        var synonym = document.createElement("li")
        synonym.textContent=synArray[i]
        synUL.appendChild(synonym)
        //maximum 10 synonyms
        if (i === 10) { break; }
      }
    });
  }
  
  synBtn.addEventListener('click',function(event){
  
    synUL.innerHTML ='';
    synonymRun()
    //deletes the word from the box
    synInput.value=""
  })

  //synonym app ends here