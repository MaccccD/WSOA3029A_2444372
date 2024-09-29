document.addEventListener("DOMContentLoaded", function() {
// this code here is for the navigation btns i have across all pages to allow easier traversal of the sight.
const Buttons  = document.querySelectorAll(".btns");

Buttons.forEach(button => {
    button.addEventListener("click",(event) =>{
     event.preventDefault();

//About page Btns section:
     if(button.classList.contains("prev0")){
        window.location.href = "/index.html";
     }
     else if(button.classList.contains("next0")){
        window.location.href = "../Design/Design.html";
     }
     

    //Design page  btns section:
    if(button.classList.contains ("prev1")){
        window.location.href = "../About/About.html";
    }
    else if (button.classList.contains("next1")){
        window.location.href =  "../Design/StyleGuide.html";
    }

    //Styles guide page btns section:
    if(button.classList.contains("prev2")){
        window.location.href = "../Design/Design.html";
     }
     else if(button.classList.contains("next2")){
        window.location.href = "../Theory/Insights.html";
     }


    //Theory page btns section: 
    if(button.classList.contains("prev3")){
        window.location.href = "../Design/StyleGuide.html";
     }
     else if(button.classList.contains("next3")){
        window.location.href = "../Visualizations/Phishing.html";
     }

    //Phishing page btns section:
    if(button.classList.contains("prev4")){
        window.location.href = "../Theory/Insights.html";
     }
     else if(button.classList.contains("next4")){
        window.location.href = "../Visualizations/Ransomware.html";
     }


    //Ransomware page btns section:
    if(button.classList.contains("prev5")){
        window.location.href = "../Visualizations/Phishing.html";
     }
     else if(button.classList.contains("next5")){
        window.location.href = "/index.html";
     }

    });
    console.log("yesss, it workssss across  all pages!")
    });
});

