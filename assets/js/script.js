var word = "program"
var requestUrl = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/'+ word +'?key=02dc8eac-3c8b-4ee7-98f5-c159035179dd';
var requestUrl2= 'https://excuser.herokuapp.com/v1/excuse/3'
var cars = ["Good morning", "Good afternoon", "Good evening" , "Hey"];


//random excuse, to add category and number -> add {category}/{number} to the url
fetch(requestUrl2)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data)
});

//synonyms -> data[1].meta.syns
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
    });