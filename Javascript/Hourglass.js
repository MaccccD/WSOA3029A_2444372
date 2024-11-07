document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("loading-screen").style.display = "none"; // hiding the hourglass icon after the dom has fully loaded

    const loadingTxt = document.getElementById("text");
    loadingTxt.textContent = "";// show the actua laoding text

    console.log("yes i am loadingg");
})