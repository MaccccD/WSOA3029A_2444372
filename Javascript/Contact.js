const contactForm = document.querySelector(".Contact");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneNumberInput = document.getElementById("phone-number");
const phoneWarning = document.getElementById("phone-warning");
const messageInput = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");
const feedbackMsg = document.getElementById("feedback");


function validateForm() {
    // required fields validation:
    if (nameInput.value && emailInput.value && messageInput.value) {
        submitBtn.disabled = false; // btn will  work if the required fileds are fully filled in
    } else {
        submitBtn.disabled = true; // btn will not  work  if the required fields are not filled in 
    }

    //phone number validation 
    if(phoneNumberInput.validity.patternMismatch || phoneNumberInput.value.length < 10){
        phoneWarning.style.display = "inline";
        phoneWarning.innerText = "Please enter a valid 10-digit phone number"
    }
    else{
        phoneWarning.style.display = "none";
    }

    //email validity 
    if(!emailInput.validity.valid){
        emailInput.setCustomValidity("Please enter an email with the correct extension: either '@gmail.com or @icloud.com'");
    }
    else{
        emailInput.setCustomValidity = "";
    }
}

// input event listeners to each field:
nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
messageInput.addEventListener("input", validateForm);
phoneNumberInput.addEventListener("input", validateForm);

// Form submission handling
contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // preventing the page from reloading !

    // Check again to see if all fields are filled before submission
    if (!nameInput.value || !emailInput.value || !messageInput.value) {
        alert("Please fill in all the required fields!"); // Alert if any field is empty
        return; // Stop the function if fields are not completed
    }


    

    // Save data to local storage
    localStorage.setItem("name", nameInput.value);
    localStorage.setItem("email", emailInput.value);
    localStorage.setItem("phone-number", phoneNumberInput.value);
    localStorage.setItem("message", messageInput.value);

    // Clear form fields
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
    phoneNumberInput.value = "";

    // Reset button state and show feedback message
    submitBtn.disabled = true;
    feedbackMsg.innerText = "Lovely! Your message has been submitted successfully :)";
    phoneWarning.style.display = "none";
});