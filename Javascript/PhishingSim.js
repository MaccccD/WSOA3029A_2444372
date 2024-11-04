document.addEventListener("DOMContentLoaded", function() {
const dodgyLink =  document.getElementById("dodgy-link");
const warningTxt = document.getElementById("warning-message");
const phishingExplanation = document.getElementById("phishing-explanation");

dodgyLink.addEventListener("click", function(event) {
    event.preventDefault() // prevent the actual navigation to the link bc its fake and doesnt exists
    

    warningTxt.classList.remove("Hidden"); // removing the hidden class which prevented the display of the warning text actually displays the warning message 
    
    setTimeout(function(){
       phishingExplanation.classList.remove("Hidden");}, 3000); // waiting 3 seconds before scrolling
    })
});