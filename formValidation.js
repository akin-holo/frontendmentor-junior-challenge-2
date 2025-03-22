
const signupContainer = document.getElementById("signupContainer");
const successContainer = document.getElementById("successContainer");

const form = document.querySelector("form");
const emailAddress = document.getElementById("email");
const errorMessage = document.getElementById("errorMSG");
const submitButton = document.getElementById("btn-submit");

const inputEmailAddress = document.getElementById("emailSentTo");


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
      showErrorMessage();

      e.preventDefault();

   } else if(emailAddress.validity.valid) {
      signupContainer.remove(); //remove the form elements
      successContainer.style.display = "block"; // display successful message
      inputEmailAddress.textContent = emailAddress.value;
   }
});   


// Error messages
function showErrorMessage() {
   if(emailAddress.value === "" || emailAddress.validity.valueMissing || emailAddress.validity.typeMismatch) {
      errorMessage.textContent = "valid email required"; 
   }
};

const dismissButton = document.getElementById("dismissButton");
dismissButton.onclick = function() {
   document.location.reload();
}
