// Victim data (hardcoded for now bc the API im using does not show this info. I then researched and found similar ransomgroups with this data below which decided to put as an array:)
const victimData = [
    { group_name: "monti", value: 526, color: "red" },
    { group_name: "ransomhub", value: 376, color: "orange" },
    { group_name: "ElDorado", value: 344, color: "yellow" },
    { group_name: "play", value: 271, color: "green" },
    { group_name: "hunters", value: 178, color: "blue" },
    { group_name: "akira", value: 176, color: "purple" },
    { group_name: "medusa", value: 167, color: "pink" },
    { group_name: "ciphbit", value: 139, color: "brown" },
    { group_name: "qilin", value: 137, color: "lightblue" },
    { group_name: "nitrogen", value: 136, color: "lightgreen" },
    { group_name: "incransom", value: 130, color: "lightyellow" },
    { group_name: "hunters", value: 124, color: "grey" },
    { group_name: "blacksuit", value: 117, color: "steelblue" },
    { group_name: "meow", value: 91, color: "lightpink" },
    { group_name: "cactus", value: 90, color: "cyan" },
    { group_name: "Other", value: 1265, color: "violet" }
];



// Total number of victims
const totalVictims = d3.sum(victimData, d => d.value);
//Fetching data from the API before I begin the actual data visualization
const ransomwareURL = 'https://api.ransomware.live/recentvictims';
//this API contains data abt the phishing attacks that have been done on urls via an IP Address that  user has user to access a specific phishing site.


// Setting  up margins and dimensions for the SVG element. I wanted to use Inner Width and Inner height considering the theme of my site but it kidn of did not scale properly
const margin = { top: 90, right: 30, bottom: 100, left: 70 },
    width = 1000 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;
    radius = Math.min(width, height) / 2 - margin.top;

    // Create the SVG element. I'm making a 2d pie chart and so these margins are the ones immma use.
    const svg = d3.select("#ransomware")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

        

    // Define the pie layout. From d3, pie  Constructs a new pie generator with the default settings
    const pie = d3.pie()
        .sort(null)
        .value(d => d.value);

    // Define the arc (pie section): the arc generator will produce a complete circle or annulus
    const arc = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);

    // Fetch ransomware API data
    fetch(ransomwareURL)
        .then(response => response.json())
        .then(apiData => {
            // Map the API data to the victimData array
            victimData.forEach(group => {
                const apiGroup = apiData.find(item => item.group_name === group.group_name);
                if (apiGroup) {
                    group.activity = apiGroup.activity;
                    group.website = apiGroup.website;
                } else {
                    group.activity = "Unknown";
                    group.website = "Unknown";
                }
            });

            // Draw the pie chart
            drawPieChart(victimData);
            createButtons(victimData);
            createButtonsTitle();
        });


       //this function is for the title of the ransomware groups buttons:
    function createButtonsTitle(){
    d3.select("#title-and-buttons")
    .insert("h1", "#buttons")
    .text("Ransomware Perpetrator Groups : ")
    .style("font-size", "22px")
    .style("color", "white")
    .style("text-align", "centre");
};
    // Function to draw the pie chart
    function drawPieChart(data) {
        const arcs = svg.selectAll("arc")// arc defines the shape of the pie same as how rect define the shape of the bars in my prev viz
            .data(pie(data)) 
            .enter()
            .append("g")
            .attr("class", "arc")
            .on("click", function (event, d) {
                // Protrude the pie section on click
                d3.select(this)
                    .transition()
                    .duration(500)
                    .attr("transform", "scale(1.1)"); // small animation using scaling
            })
            .on("mouseover", function (event, d) {
                // Show tooltip on hover
                tooltip.style("opacity", 1)
                    .html(`<strong> Ransom Group:</strong> ${d.data.group_name}<br>
                           <strong>Victims:</strong> ${d.data.value}<br>
                           <strong>Ransomware disguised Activity:</strong> ${d.data.activity}<br>
                           <strong>Website:</strong> ${d.data.website}`)
                    .style("left", (event.pageX + 10) + "px")
                    .style("top", (event.pageY - 20) + "px")
                    .style("display", "inline-block");
                    
            })
            .on("mouseout", function () {
                // Hide tooltip
                tooltip.style("opacity", 0);
            });

        // Append the pie slices
        arcs.append("path")
            .attr("d", arc)
            .attr("fill", d => d.data.color);


         // Add percentage labels
          arcs.append("text")
         .attr("transform", d => `translate(${arc.centroid(d)})`)
         .attr("text-anchor", "start")
         .attr("font-size", "11px")
         .attr("fill", "black")
         .text(d => {
             const percentage = ((d.data.value / totalVictims) * 100).toFixed(1);
             return percentage > 1 ? `${percentage}%` : ""; // Only show for percentages > 3%
    });
};
    // Create buttons for each group_name
    function createButtons(data) {
        data.forEach(group => {
            d3.select("#buttons")
            .append("button")
            .text(group.group_name)
            .style("background-color", group.color)  // Set button color based on slice color
            .style("color", "black")
            .style("border", "none")
            .style("padding", "10px")
            .style("font-size", "14px")
            .style("border-radius", "8px")
            .style("cursor", "pointer")
            .on("click", () => {
                // Find the corresponding pie section and apply a transform
                d3.selectAll(".arc")
                    .filter(d => d.data.group_name === group.group_name)
                    .transition()
                    .duration(500)
                    .attr("transform", "scale(1.1)"); 
            });
    });
};

//styling the tooltip:
    const tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("background-color", "black")
    .style("padding", "5px")
    .style("border", "1px solid black")
    .style("border-radius", "8px")
    .style("color", "white")
    .style("cursor", "pointer")
    .style("opacity", 0);
  
