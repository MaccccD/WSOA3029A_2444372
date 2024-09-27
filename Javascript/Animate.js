document.addEventListener("DOMContentLoaded", () => {
    const h1 = document.querySelector(".Welcome");
    if(!h1){
        console.error("no h1 tag found on sighhht, plsss check if you have the tagg");
        return;
    }//loading the html content first so that it parses and then the h1 tag can be found before the the rest of the code beloew executes 

const headertxt = " Welcome to the Hacking World";
let  index = 0;//initialising the first letter as index 0

//creating a cool animation where when user hover over the words to dosplay above, the words react by turning intp the shape i have set below
//below im getting the rgb values of the different colors that i am storing in an array of the letters that i want the phrase( the headertxt) above to have
const red = [0, 100, 63];
const white =[255, 255, 255]

const letterColors =[red, white];//creating an array that stores the order of the colors
function ShowHeaderTxt(){
    if(index < headertxt.length){//checks if the index number is less than the string of the header text , if yes, it increments it by one
        h1.textContent += headertxt.charAt(index);
        index ++;//incrementing the index of the letters as it "spells" the rest of the letters of the headr text
        setTimeout(ShowHeaderTxt, 200); //how long the whole ting tryna take, i.e the actual placements of the words 
    }
}
 function drawName(text, colorArray) // this function basically stores the spans for the text colors and the text themselves by creating a specifc fonts and and appending the color onot the text
 {
    h1.innerHTML = "";// this is the text that i will be making an animation of found inn the index html doccie
    
    for (let i = 0; i < text.length; i++) { // a for loop to check the text length and append the color to each letter of the "word to display"
        const span = document.createElement('span');
        span.textContent = text[i];
        const color = colorArray[i % colorArray.length];
        span.style.color = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;//here im using template literals for easier readbility of how each color is attricbuitted to each letter of the word that is going to be displayed
        span.style.transition = 'transform 0.35s ease, color 0.35s ease';//how long the transition of color should tak on avarage
        h1.appendChild(span);//appending the h1 element onto the span so they are connected and their behavior influnces each other
    }
}

// Function to trigger the hover effect (animation on hover) and when the mouse in not over the text, it bounces in a wavy like format
function bounceBubbles() {
    const spans = h1.querySelectorAll('span');
    
    spans.forEach((span, index) => {// the for each elemnt expects a call back for the (element plus index) in parentheses, hence i closed the bracket right after index 
        span.style.animationDelay = `${index * 0.1}s`;// wavy like  bouncing of the text which multiplies each letter's index by 0.1

        span.addEventListener('mouseover', () => {
            span.style.animation = "none";
            span.style.transform = 'rotate(180deg) scale(2.5)';//makes the index of each letter roatate in a 180 degress angle for visual aesthetic purposes
        });
        span.addEventListener('mouseout', () => {
            span.style.transform = 'rotate(0deg) scale(1)';
            setTimeout (()=>{
                span.style.animation = `bounce  1sec infinite ease-in-out ${index * 0.1}s`//same comment as above that relates to this
            }, 350);
        });
    });
}
function AddPointerIcons(){
    const leftPointerIcon = document.createElement("span");
    const rightPointerIcon = document.createElement("span");

    leftPointerIcon.textContent = "→";
    rightPointerIcon.textContent = "←"; //addds the left and right pointing emojis as the text content

    leftPointerIcon.classList.add = "pointer"; //adds the classes of the pointer icon emojis above
    rightPointerIcon.classList.add = "pointer";

   h1.prepend(leftPointerIcon);
   h1.appendChild(rightPointerIcon);
}
console.log("this code is workingggg");
 ShowHeaderTxt();
 setTimeout(() =>{
    drawName(headertxt, letterColors);
    bounceBubbles();
    AddPointerIcons();
    }, headertxt.length *200 + 500);// to ensure that the header text shows right after. so these values are really just values in seconds.

});




