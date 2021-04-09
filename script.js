const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

const XHRbtn = document.querySelector("#xhr");
const fetchbtn = document.querySelector("#fetch");
const jquerybtn = document.querySelector("#jquery");
const axiosbtn = document.querySelector("#axios");

const pQuote = document.querySelector("#quote").innerText;


// XHR

XHRbtn.addEventListener('click', function(){
  const XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if (XHR.readyState == 4 && XHR.status == 200){
      const quote = JSON.parse(XHR.responseText)[0];
      document.querySelector("#quote").innerText = quote; 
    }
  }
  XHR.open("GET", url);
  XHR.send();
});


// Fetch

fetchbtn.addEventListener('click', function() {
  fetch(url)
  .then(function(request){
    request.json().then(function(data){
      const quote = data[0];
      document.querySelector("#quote").innerText = quote; 
    })
  })
  .catch(function(){
    alert("ERROR!");
  })
});


// jQuery

$("#jquery").on('click', function(){
  $.getJSON(url)
  .done(function(data){
    const quote = data[0];
    document.querySelector("#quote").innerText = quote; 
  })
  .fail(function(){
    alert("Oopsie!");
  })
});


//Axios

axiosbtn.addEventListener('click', function(){
  axios.get(url)
  .then(function(resp){
    const quote = resp.data[0];
    document.querySelector("#quote").innerText = quote;
  })
  .catch(function(){
    alert("ERROR!");
  })
});