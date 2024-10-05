document.addEventListener("DOMContentLoaded", function() {//callback initialiation(as Mike Geyser would say),  which basically renders or parses all content needed to construct the dom tree i.e the html before it can execute the js
    const header = document.querySelector("h1");
    let index = 0;

    function animateHeaderText(text) {
        if (!text) {
            console.error("No text provided for animation!");
            return;
        }
        function showHeaderTxt() {
            if (index < text.length) {
                header.textContent += text.charAt(index);//increasing the number of letters by one  as they are getting spelled out one by one to form  the full name.
                index++; // incrementss the number ofletter getting spelled by 1 to complete the full set of letters
                setTimeout(showHeaderTxt, 200); 
            }
        }
        showHeaderTxt();
    }
    const nickName = localStorage.getItem("nickName");
    if(nickName){// in here im checking if the users name is saved in my local storrage 
        header.textContent = ""; //if yess, then it just updates the text using the type writer effect 
       // console.log("Nickname has been found :" + nickName);
        animateHeaderText(`Hey ${nickName}, glad you are here. Welcome to the Hacking World.`);
    } else{//if its the users first time(no), then they put in their nick name and its updates and welcome them into my world , xD!
        const nameInput = prompt("Heyyy Userrrr, Thanks for choosing this website, Please enter your nickname");
        if(nameInput){
         localStorage.setItem("nickName", nameInput);
         header.textContent = "";
         console.log("nickname input received and stored:" + nameInput);
         animateHeaderText(`Hey ${nameInput}, glad your are here. Welcome to the Hacking World.`);
        }
        else{
            console.log("no nickname was provided by the user :" + nameInput);
        }
        console.log("yeah yeah its working stop stressing xD");//for my own piece of mind to see if its workinggg xD!
     
    }
    });