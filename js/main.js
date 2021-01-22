//Get the button
var mybutton = document.getElementById("myBtn");
      
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//form validation
function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

const submitBtn = document.getElementById('submit-btn');

const validate = (e) => {
e.preventDefault();
const username = document.getElementById('name');
const emailAddress = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
if (username.value === "") {
  printError("nameErr", "Please enter your name");
  username.focus();
  return false;
}
else {
  printError("nameErr", "");
}
if (emailAddress.value === "") {
  printError("emailErr", "Please enter your email address");
  emailAddress.focus();
  return false;
}
else {
  printError("emailErr", "");
}
if (subject.value === "") {
  printError("subErr", "Please enter a subject");
  subject.focus();
  return false;
}
else {
  printError("subErr", "");
}
if (message.value === "") {
  printError("messErr", "Please enter message");
  message.focus();
  return false;
}
else {
  printError("messErr", "");
}

document.myForm.submit();
}

submitBtn.addEventListener('click', validate);