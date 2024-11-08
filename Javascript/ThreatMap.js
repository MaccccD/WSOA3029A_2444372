const phishingStats = "https://phishstats.info:2096/api/phishing?_sort=-id";
const width = 800;
const height = 600;

const svg = d3.select("#phishingStats")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

const projection = d3.geoMercator()
    .scale(130)
    .translate([width / 2, height / 1.5]);

const path = d3.geoPath().projection(projection);

const tooltip = d3.select("#phishingStats")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

// Fetch world map data and initialize
d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson").then(geoData => {
    svg.append("g")
        .selectAll("path")
        .data(geoData.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("fill", "#ccc")
        .attr("stroke", "#333");

    createFilterToggles();
    addResetZoomButton();
    fetchPhishingStatistics();
});

function createFilterToggles() {
    const filterDiv = d3.select("#filterOptions");

     const last24Wrapper = filterDiv.append("div").attr("class", "Toggle-wrapper");
     last24Wrapper.append("label")
    .attr("class", "toggle-label")
    .text("Last 24 Hours")
    .style("color", "blue");

     last24Wrapper.append("input")
    .attr("type", "checkbox")
    .attr("id", "last24Toggle")
    .attr("class", "toggle-checkbox") // Add class for custom styling
    .on("change", () => applyFilters());

     // Toggle for last 48 hours
     const last48Wrapper = filterDiv.append("div").attr("class", "Toggle-wrapper");
     last48Wrapper.append("label")
    .attr("class", "toggle-label")
    .text("Last 48 Hours")
    .style("color", "orange");

     last48Wrapper.append("input")
    .attr("type", "checkbox")
    .attr("id", "last48Toggle")
    .attr("class", "toggle-checkbox") // Add class for custom styling
    .on("change", () => applyFilters());

    //toggle for the highest no of attacks
    const highestAttacks = filterDiv.append("div").attr("class", "Toggle-wrapper");
    highestAttacks.append("label")
    .attr("class", "toggle-label")
    .text("Highest No. of Attacks")
    .style("color", "green");

    highestAttacks.append("input")
    .attr("type", "checkbox")
    .attr("id", "highestAttacks")
    .attr("class", "toggle-checkbox") // Add class for custom styling
    .on("change", () => applyAttackFilters());


    //toggle for the lowest no. of attacks :
    const lowestAttacks = filterDiv.append("div").attr("class", "Toggle-wrapper");
    lowestAttacks.append("label")
    .attr("class", "toggle-label")
    .text("Lowest No. of Attacks")
    .style("color", "purple");

     lowestAttacks.append("input")
    .attr("type", "checkbox")
    .attr("id", "lowestAttacks")
    .attr("class", "toggle-checkbox") // Add class for custom styling
    .on("change", () => applyAttackFilters());




}

// Fetch phishing data from the API
async function fetchPhishingStatistics() {
    try {
        const response = await fetch(phishingStats);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        window.phishingData = data;

        renderMapMarkers(window.phishingData);

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Apply selected filters and update map markers
function applyFilters() {
    let filteredData = window.phishingData;

    const last24Checked = d3.select("#last24Toggle").property("checked");
    const last48Checked = d3.select("#last48Toggle").property("checked");

    // Filter data for the last 24 and 48 hours
    if (last24Checked) {
        filteredData = filteredData.filter(d => isRecent(d.date_update, 24));
        renderMapMarkers(filteredData, "blue"); // Blue for last 24 hours
    } else if (last48Checked) {
        filteredData = filteredData.filter(d => isRecent(d.date_update, 48));
        renderMapMarkers(filteredData, "orange"); // Orange for last 48 hours
    } else {
        // For red, I want to show all attacks that are outside of the filter range
        const redData = window.phishingData.filter(d => !isRecent(d.date_update, 24) && !isRecent(d.date_update, 48));
        renderMapMarkers(redData, "red"); // Red for attacks outside the filter range
    }
}
function applyAttackFilters (){
    let filteredAttackData = window.phishingData;

    const highestAttacksChecked = d3.select("#highestAttacks").property("checked");
    const lowestAttacksChecked = d3.select("#lowestAttacks").property("checked");

    if (highestAttacksChecked) {
        // Find the highest attack count in the dataset
        const maxId = d3.max(filteredAttackData, d => d.id);
        filteredAttackData = filteredAttackData.filter(d => d.id === maxId);
        renderAttackMarkers(filteredAttackData, "green");
    } else if (lowestAttacksChecked) {
        // Find the lowest attack count in the dataset
        const minId = d3.min(filteredAttackData, d => d.id);
        filteredAttackData = filteredAttackData.filter(d => d.id === minId);
        renderAttackMarkers(filteredAttackData, "purple");
    } else {
        // If neither toggle is checked, reset to show all markers
        renderMapMarkers(window.phishingData, "red");
    }
}
// Render map markers for phishing attacks
function renderMapMarkers(data, color = "red") {
    svg.selectAll("circle").remove(); // Clear existing markers
    svg.selectAll(".Magnify-icon").remove(); // Remove previous magnifying glass icons

    data.forEach(d => {
        if (d.latitude && d.longitude && d.countryname && d.id && d.url && d.date && d.date_update) {
            const [x, y] = projection([+d.longitude, +d.latitude]);

            svg.append("circle")
                .attr("cx", x)
                .attr("cy", y)
                .attr("r", 6)
                .attr("fill", color)
                .attr("opacity", 0.8)
                .attr("stroke", "#000")
                .attr("class", color === "blue" || color === "orange" ? "blinking" : "")
                .on("mouseover", function(event) {
                    d3.select(this).transition().attr("r", 7);
                    tooltip.transition().style("opacity", .9);
                    tooltip.html(`
                        Country: ${d.countryname}<br>
                        No.of Attacks: ${d.id}<br>
                        URL: <a href="${d.url}" target="_blank">${d.url}</a><br>
                        Date: ${new Date(d.date_update).toLocaleString()}<br>
                        Location: Click to zoom in and see the actual location of this phishing attack`)
                        .style("left", (event.pageX + 10) + "px")
                        .style("top", (event.pageY - 30) + "px");
                })
                .on("mouseout", function() {
                    d3.select(this).transition().attr("r", 5);
                    tooltip.transition().style("opacity", 0);
                })
                .on("click", function() {
                    zoomToLocation(+d.longitude, +d.latitude);
                });

            // Adding the magnifying glass icon to let users know they can zoom in
            svg.append("text")
                .attr("x", x - 5)
                .attr("y", y)
                .attr("class", "Magnify-icon")
                .text("🔍");
        }
    });
}
function renderAttackMarkers(data, color = "green") {
    svg.selectAll("circle").remove(); // Clear existing markers
    svg.selectAll(".Magnify-icon").remove(); // Remove previous magnifying glass icons

    data.forEach(d => {
        if (d.latitude && d.longitude && d.countryname && d.id && d.url && d.date) {
            const [x, y] = projection([+d.longitude, +d.latitude]);

            svg.append("circle")
                .attr("cx", x)
                .attr("cy", y)
                .attr("r", 6)
                .attr("fill", color)
                .attr("opacity", 0.8)
                .attr("stroke", "#000")
                .attr("class", color === "green" || color === "purple" ? "blinking" : "")
                .on("mouseover", function(event) {
                    d3.select(this).transition().attr("r", 7);
                    tooltip.transition().style("opacity", .9);
                    tooltip.html(`
                        Country: ${d.countryname}<br>
                        No.of Attacks: ${d.id}<br>
                        URL: <a href="${d.url}" target="_blank">${d.url}</a><br>
                        Date: ${new Date(d.date).toLocaleString()}<br>
                        Location: Click to zoom in and see the actual location of this phishing attack`)
                        .style("left", (event.pageX + 10) + "px")
                        .style("top", (event.pageY - 30) + "px");
                })
                .on("mouseout", function() {
                    d3.select(this).transition().attr("r", 5);
                    tooltip.transition().style("opacity", 0);
                })
                .on("click", function() {
                    zoomToLocation(+d.longitude, +d.latitude);
                });

            // Adding the magnifying glass icon to let users know they can zoom in
            svg.append("text")
                .attr("x", x - 5)
                .attr("y", y)
                .attr("class", "Magnify-icon")
                .text("🔍");
        }
    });
}
// Utility function to check if attack is recent
function isRecent(dateString, hours) {
    const attackDate = new Date(dateString);
    const now = new Date();
    const diff = (now - attackDate) / (1000 * 60 * 60); // Convert ms to hours
    return diff <= hours;
}

// Zoom function and reset button
function zoomToLocation(longitude, latitude) {
    const [x, y] = projection([longitude, latitude]);
    const zoomScale = 4;

    svg.transition()
        .duration(1000)
        .attr("transform", `translate(${width / 2 - x * zoomScale}, ${height / 2 - y * zoomScale}) scale(${zoomScale})`);
}

function addResetZoomButton() {
    d3.select("#phishingStats")
        .append("button")
        .text("Reset View")
        .attr("id", "resetZoom")
        .on("click", function() {
            svg.transition()
                .duration(1000)
                .attr("transform", "translate(0,0) scale(1)");
        });
}