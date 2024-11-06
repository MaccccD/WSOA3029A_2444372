const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext('2d');

//setting up the viewport size like we iusually do when working w D3.js
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//the characters for effect:
const characters = "0123456789ABCDEFGHIJKLMNPQRXYSZ";
const fontSize = 16;
const columns = canvas.width/fontSize;

//an array to storue each letter that drops for each column
const droppingLetters = Array.from({length: columns}).fill(1);

//drawing the actual matrox like effect :
function drawMatrix (){
    ctx.fillStyle = 'rgba(20, 17, 17)'; // using a black bg with a slight transparency
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //font size and style :
    ctx.fillStyle = '#0F0'
    ctx.font= `${fontSize}px monospace`;

    droppingLetters.forEach((y, x)=> {
        const text = characters[Math.floor(Math.random()* characters.length)];
        ctx.fillText(text,x * fontSize, y *fontSize);

        //reset the drop postion after each leter falls and the another one sort of spawns back :
        if(y * fontSize > canvas.height && Math.random() > 0.98) {
            droppingLetters[x] = 0; // resetting here
        }
        droppingLetters[x]++; // increments the number of letters that get dropped after one letter
    });

}
setInterval(drawMatrix, 65);



//resizing canvas on window size:
window.addEventListener("resize", () =>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});