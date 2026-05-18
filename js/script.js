

/* In this example we will use the same setup as before.. but just use it over and over. 
Try for yourself .. create a new prompt assigned to a variable 
and display it on the html page with agetElementbyID   */

/* for the final version we will add a string to the varable for the printout */

var questionOne = prompt("What is today's date?");
document.getElementById("date").innerHTML = questionOne;

var questionOne = prompt("What's your first name or nickname?");
document.getElementById("name").innerHTML = questionOne;

var questionOne = prompt("name of a pet");
document.getElementById("planet").innerHTML = questionOne;

var questionOne = prompt("singular object");
document.getElementById("floating").innerHTML = questionOne;

var questionOne = prompt("plural noun");
document.getElementById("aliens").innerHTML = questionOne;

var questionOne = prompt("adjective");
document.getElementById("eyes").innerHTML = questionOne;

var questionOne = prompt("an insect (plural)");
document.getElementById("eat").innerHTML = questionOne + " (yikes!)";

var questionOne = prompt("an animal (singular)");
document.getElementById("ride").innerHTML = questionOne;

var questionOne = prompt("old fashioned name");
document.getElementById("escape").innerHTML = questionOne;

var questionOne = prompt("singular noun");
document.getElementById("emergency").innerHTML = questionOne;