
//here im basically finding each anchor tag wjich has the subheading that would be clikable and take the users to that section of the essay
document.querySelectorAll(".Sidebar a").forEach(anchor =>{
    anchor.addEventListener("click", (e)=> {
    e.preventDefault();// prevent page from reloading
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
        top: target.offsetTop - 20,
        behavior: "smooth"
        
    });
    });

});