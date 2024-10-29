const scrollUp = document.querySelector(".Scroll"); // calss for the scroll to top Btn


//using the current window to determine at what point the btn shows up:
if(scrollUp) {
window.addEventListener("scroll", () => {
    if(window.scrollY > 100){
        scrollUp.style.display = "block";
    }
    else
    {
        scrollUp.style.display = "none";
    }
});

//event listener for the btn:
scrollUp.addEventListener("click", () =>{
    window.scrollTo({top: 0, behavior: "smooth"});
    console.log("Btn clicked and it works !!")
});
}
else{
    console.error ("Btn not found !!");
}