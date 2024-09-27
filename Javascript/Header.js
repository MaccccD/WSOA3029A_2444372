document.addEventListener("DOMContentLoaded", function() {//callback initialiation(as Mike Geyser would say),  which basically renders or parses all content needed to construct the dom tree i.e the html before it can execute the js
    const header= document.querySelector("h1");
    const headertxt = "";
    let  index = 0;//initialising the first letter as index o
    
    function animateHeaderText(text){
        if (!header) { // here i was just checking if the hheader text place was found by the query selector si i get notidied if its not by the console error message
            console.error("No <h1> element found.");
            return;//just chyekcing if it can actually find the h1 tag
        }
        
    function ShowHeaderTxt(){
        if(index < headertxt.length){//checks if the index number is less than the string of the header text , if yes, it increments it by one
            header.textContent += headertxt.charAt(index);
            index ++;//incrementing the index of the letters as it "spells" the rest of the letters of the headr text
            setTimeout(ShowHeaderTxt, 200); //how long the whole ting tryna take, i.e the actual placements of the words 
        }
    }
     ShowHeaderTxt();//here i'm calling in the function once the dom content  has parsed and the actual h1 element exist and available to be found
    };
     
    const nickName = localStorage.getItem("nickName");
    if(nickName){// in here im checking if the users name is saved in my local storrage 
        animateHeaderText();
        header.textContent = `Hey ${nickName}:) , glad you are here. Welcome to the Hacking World `; //if yess, then it just updates the text using the type writer effect 
    } else{//if its the users first time(no), then they put in their nick name and its updates and welcome them into my world , xD!
        const nameInput = prompt("Heyyy Userrrr, Thanks for choosing this website, Please enter your nickname");
        if(nameInput){
         localStorage.setItem("nickName", nameInput);
         animateHeaderText();
         header.textContent = `Hey ${nameInput}:), glad you are here. Welcome to the Hacking World `;
        }
        console.log("yeah yeah its working stop stressing xD");//for my own piece of mind to see if its workinggg xD!
     
    }
    });