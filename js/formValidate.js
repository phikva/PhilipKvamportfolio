//validate form DOM
const contactForm = document.querySelector("#contact-form");
const status = document.querySelector(".status");


contactForm.addEventListener("submit", function(ev) {
    ev.preventDefault();
    validateForm();
   
    var data = new FormData(contactForm);
     ajax(contactForm.method, contactForm.action, data,success,error);
    
  });



function success() {
    contactForm.reset();
    status.innerHTML = "Message was sendt";
    status.style.color = "green";
  }

  function error() {
    status.innerHTML = "Oops! There was a problem.";
    status.style.color = "red";
  }


function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}



//Validate Email Function
function emailValidation(email) {
  const regularEx = /\S+@\S+\.\S+/;
  return regularEx.test(email);
}


      
submitButton = document.querySelector("#submitform") ;


          
function validateForm(event) {

  
// Name
  const Name = document.querySelector("#name");
  const NameError = document.querySelector("#name-error");
  const NameValue = Name.value;
 
  //Email
  const email = document.querySelector("#email");
  const emailError = document.querySelector("#email-error");
  const emailValue = email.value;

  //Message
  const message = document.querySelector("#message");
  const messageError = document.querySelector("#message-error");
  const messageValue = message.value;

  //Name Check
  if (checkTextLength(NameValue) === true) {
    NameError.style.display = "none";
   
  } else {
    NameError.style.color = "red";
    NameError.style.display = "block"; 
    
  }

  //Email Check
  if (checkTextLength(emailValue) === true) {
    emailError.style.display = "none";
  
  } else {
    emailError.style.color = "red";
    emailError.style.display = "block";
   
  }
  if (emailValidation(emailValue) === true) {
    emailError.style.display = "none";
   
  } else {
    emailError.style.color = "red";
    emailError.style.display = "block";
   
  }

  //Message Check
  if (checkTextLength(messageValue) === true) {
    messageError.style.display = "none";
   
  } else {
    messageError.style.color = "red";
    messageError.style.display = "block";
    
  }
  

}

//Trim length
function checkTextLength(value) {
  const trimValue = value.trim();
  if (trimValue.length > 0) {
    return true;
  } else {
    return false;
  }
}

  
