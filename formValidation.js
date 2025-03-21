const pageBody = document.querySelector("body");

const signupContainer = document.getElementById("signupContainer");
const successContainer = document.getElementById("successContainer");


const form = document.querySelector("form");
const emailAddress = document.getElementById("email");
const errorMessage = document.getElementById("errorMSG");

const submitButton = document.getElementById("btn-submit");

const inputEmailAddress = document.getElementById("emailSentTo");

const dismissButton = document.getElementById("dismissButton");
dismissButton.onclick = function() {
   location.href = "index.html";
}

// validate Email Addesss input
emailAddress.addEventListener("input", (event) => {
   if(emailAddress.validity.valid) {
      errorMessage.textContent = "";
   } else {
      showErrorMessage();
   }
});

// validate form 
form.addEventListener("submit", (e) => {
   if(!emailAddress.validity.valid || emailAddress.value == "") {
      errorMessage.textContent = "Form cannot be submitted if email provided mismatch email type";

      e.preventDefault();
   } else {
      signupContainer.remove();
      successContainer.style.cssText= "display:block; transition: 0.5s";
      
      inputEmailAddress.textContent = emailAddress.value;
   }

   // if(emailAddress.validity.valueMissing) {
   //    errorMessage.textContent = "You need to enter an email address.";
   // }
});   


// Error messages
function showErrorMessage() {
   if(emailAddress.value === "") {
      errorMessage.textContent = "submitted if email provided mismatch email type"; 

   } else if(emailAddress.validity.valueMissing) {
      errorMessage.textContent = "You need to enter an email address.";
   } else if(emailAddress.validity.typeMismatch) {
      errorMessage.textContent = "Please eneter a valid email value.";

   }
};
