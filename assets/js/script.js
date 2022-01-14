M.AutoInit();

function init() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var dropdownOptions = {
    'hover': false
  }
  dropBtn = M.Dropdown.init(elems, dropdownOptions);
}

var instance = M.Dropdown.getInstance(dropdown1);

init();


var time = moment().format("H")
var requestUrl2 = 'https://excuser.herokuapp.com/v1/excuse/'
var greetingsArray = ['Good morning ', 'Good afternoon ', 'Good evening ', 'Hello '];
var informalGreeting = ['Hey ', 'Hi ', 'Whats shakin bacon ', 'Yo ', 'Sup '];
var emailClosing = ['Sincerely,', 'Best regards,', 'Best,'];
var apologies = [" I'm so sorry.", ' Sorry in advance.', ' I apologize for any inconvience.', ' Thank you for understanding.']

//random excuse, to add category and number -> add {category}/{number} to the url
var newExBtn=document.querySelector('#newExBtn')
var copyBtn=document.querySelector('#copyBtn')
var excuseText = document.querySelector('#excuse-input')
var category = document.querySelector('#category')
var receiver =document.querySelector('#receiver-input')
var userName =document.querySelector('#user-input')
// var emailText = document.querySelector('#emailText')
var nameField = document.querySelector('#nameField')
var dropBtn = document.querySelector('#dropBtn')

var email = document.querySelector('#email')
var text = document.querySelector('#text')
var emailText = 0


//new email button
email.addEventListener('click',function(event){
  emailText = 0
  nameField.hidden = false;
  dropBtn.textContent = "Email"
})

//new text button
text.addEventListener('click',function(event){
  emailText = 1
  nameField.hidden = true;
  dropBtn.textContent = "SMS"
})


//Email Greetings based on time
if (time>=5&&time<11){
  var greeting='Good morning '
} else if (time>=11&&time<17){
  var greeting='Good afternoon '
} else if (time>=17&&time<22){
  var greeting='Good evening '
} else if (time>=22&&time<5){
  var greeting='Hello '
}


//new excuse button
newExBtn.addEventListener('click',function(event){
  // add +category.value to theURL to get excuse from category
  var emailCat=['office', 'children', 'college']
  var textCat=['party','children', 'college']
  var  emailIndex = Math.floor(Math.random()*(emailClosing.length))
  var  apologiesIndex = Math.floor(Math.random()*(apologies.length))
  var  informalIndex = Math.floor(Math.random()*(informalGreeting.length))
  var catIndex = Math.floor(Math.random()*(emailCat.length))

  
  
  if (emailText===0){
    var category = emailCat[catIndex]
    
  } else if(emailText===1) {
    var category = textCat[catIndex]
  }
  
  var requestUrl2= 'https://excuser.herokuapp.com/v1/excuse/'+category
  console.log(requestUrl2)
  console.log(category)

  function newExcuse(){
    fetch(requestUrl2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      // API excuse
      if(data[0].excuse){
        var apiExcuse = data[0].excuse
      } else if (data[0].death){
        var apiExcuse = data[0].death
      }

      var emptyUser = ""
      var emptyReceiver = ""
      
      if (userName.value=="" || userName.value==null){
        var emptyUser = "[Your Name]"
      } 
      if (receiver.value=="" || receiver.value==null){
        var emptyReceiver = "[Recipient's Name]"
      }
      
      // Full excuse
      if (emailText === 0){
        // email 
        excuseText.value = greeting + receiver.value+ emptyReceiver + ", "+'\r\n' +'\r\n' +apiExcuse + apologies[apologiesIndex]+'\r\n'+'\r\n' + emailClosing[emailIndex]+'\r\n'+'\r\n'+ userName.value+emptyUser;
      } else if(emailText === 1) {
        // text
        excuseText.value= informalGreeting[informalIndex]+receiver.value+emptyReceiver+". "+ " Sorry but... "+apiExcuse 
      }
    });
  }
  newExcuse()
  
  synUL.innerHTML ='';
})

//copy button
copyBtn.addEventListener('click', function (event) {
  navigator.clipboard.writeText(excuseText.value);
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
        // if (i === 10) { break; }
      }
    });
  }
  
  synBtn.addEventListener('click',function(event){
    
    //resets the list
    synUL.innerHTML ='';
    var synonymHeading = document.createElement("h5")
    synonymHeading.textContent = 'Synonyms for "'+synInput.value+'":'
    synUL.appendChild(synonymHeading);
    synonymRun()
    //deletes the word from the box
    synInput.value=""

  })

  //synonym app ends here
 