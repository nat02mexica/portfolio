var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName (){
  var name = prompt('Please enter your name');
  myHeading.innerHTML() = name;
}

  // myHeading.innerHTML()


myButton.onclick = function(){
  setUserName
}

// Dont forget to link your js file in your HTML
