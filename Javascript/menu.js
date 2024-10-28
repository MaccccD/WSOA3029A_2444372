const root = "/WSOA3029A_2444372";
const menuItemss = [
    { name: "Home", href:  root + "/index.html"},
    { name: "About", href: `${root}/About/About.html`},
    { name: "Design", href: `${root}/Design/StyleGuide.html`},
    { name: "Hack", href: `${root}/Visualizations/Phishing.html`},
    { name: "Contact", href: `${root}/Contact/Contact.html`},
];

// i added my hovering functionality here so that when users hover over the navigation links it converys them to uppercase
function handleMouseOver(event) {
    event.target.innerText = event.target.innerText.toUpperCase();
}

function handleMouseOut(event) {//converts back to lover case using the event target where the mouse will be
    event.target.innerText = event.target.innerText.toLowerCase();
    
}
function toggleMenu(){ //this function is to toggle the menu to activate or open each time the hamburger menu item is clicked
    const nav = document.querySelector("header > nav");
    const hamburgerIcon = document.getElementById("hamburger").querySelector("ion-icon");
 //show the menu hamburger icon
    nav.classList.toggle("open");

    // Change icon between hamburger and close ("X")
    if (nav.classList.contains("open")) {
        hamburgerIcon.setAttribute("name", "close-outline"); // Switch to "X" icon
    } else {
        hamburgerIcon.setAttribute("name", "menu-outline"); // Switch back to hamburger icon
    }
}


export function initialise(currentPage) {
    const nav = document.querySelector("header > nav");
    const table = document.createElement("table");
    const tr = document.createElement("tr");

    for (let menuItem of menuItemss) {
        const td = document.createElement("td");//this is table data cell that will be appended to the table row
        const a = document.createElement("a");
        a.innerText = menuItem.name;
        a.setAttribute("href", menuItem.href);


        if (window.location.pathname.includes(menuItem.href)) { // if the url of the current window matches the url of the menu Item , the color should change to green 
            a.style.color = "limegreen"; // Set the active page link to green
        } else {
            a.style.color = "white"; // Default color for other links
            a.addEventListener("mouseover", handleMouseOver);
            a.addEventListener("mouseout", handleMouseOut);
        }
        td.appendChild(a);
        tr.appendChild(td);//appending the table data cell to the table row element as mentioned
    }
    table.appendChild(tr)
    nav.appendChild(table);
    

     // Attach the toggle functionality to the hamburger icon
     const hamburger = document.getElementById("hamburger");
     hamburger.addEventListener("click", toggleMenu);
     console.log("the icon is showing");

    console.log("Menu is workingggg broooo!");//for my own piece of mind , i have this showing to prove its working .
    
};

