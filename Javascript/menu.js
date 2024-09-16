const root = "/WSOA3029A_2444372";
const menuItemss = [
    { name: "Home", href:  root + "/index.html"},
    { name: "Design", href: `${root}/Design/Design.html`},
    { name: "StylesGuide", href: `${root}/Design/StyleGuide.html`},
    { name: "Theory", href: `${root}/Theory/Insights.html`},
    { name: "Phishing", href: `${root}/Visualizations/Phishing.html`},
    { name: "Ransomware", href: `${root}/Visualizations/Ransomware.html`},
    { name: "Statistics", href: `${root}/Statistics/Stats.html`}
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
    nav.classList.toggle("open")
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
        if (currentPage != menuItem.name) { //keeping the same functionality even when the page is not home page but the hovieirng will stilll work if we calll the function and add eevent listeners here
            a.addEventListener("mouseover", handleMouseOver);
            a.addEventListener("mouseout", handleMouseOut);
        }
        td.appendChild(a);
        tr.appendChild(td);//appending the table data cell to the table row element as mentioned
    }
    table.appendChild(tr)
    nav.appendChild(table);
    

    const style = document.createElement("style");//adding the CSS element here to "style" the way my navigation row spacially look like with each other
    style.textContent = `
    td {
        padding: 25px; 
        text-align: right;
    }
    a{
        color: White;
    }
    a:hover{
        color: limegreen;
    }
`  
    document.head.appendChild(style);//appending the style elements to the overall webpage of the whole site
    console.log("Menu is workingggg broooo!");//for my own piece of mind , i have this showing to prove its working .
};

