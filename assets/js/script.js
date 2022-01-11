var requestUrl2= 'https://excuser.herokuapp.com/v1/excuse/3'
var greetings = ['Good morning,', 'Good afternoon,', 'Good evening,'];
var informalGreeting = ['Hey,' , 'Hi,' , 'Whats shakin bacon' , 'Yo'];
var emailClosing = ['Sincerely,' ,'See you soon,', 'Thank you for understanding'];
var apologies = ['Im sooo sorry' , 'Sorry in advance' , 'I apologize for any inconvience']


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
      console.log(data[1].meta.syns)
      synUL.innerHTML ='';
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

    synonymRun()
    //deletes the word from the box
    synInput.value=""
  })

  //synonym app ends here

  // greetings array not connected to anything yet
  document.getElementById("").innerHTML = greetings;