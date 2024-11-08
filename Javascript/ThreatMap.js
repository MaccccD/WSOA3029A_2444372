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
    .style("opacity", 6);

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
    fetchPhishingStatistics();
});

function createFilterToggles() {
    d3.select("#filterOptions").html(`
        <button onclick="filterData(24)">Last 24 Hours</button>
        <button onclick="filterData(48)">Last 48 Hours</button>
    `);
}

// Fetch phishing data from the API
async function fetchPhishingStatistics() {
    try {
        const response = await fetch(phishingStats);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        window.phishingData = data;

        // Render the full set of data (global data)
        renderMapMarkers(window.phishingData, "all");

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Filter data and render markers based on selected time range
function filterData(hours) {
    const filteredData = window.phishingData.filter(d => d.date_update && isRecent(d.date_update, hours));
    renderMapMarkers(filteredData, `last ${hours} hours`);
}

// Render map markers for phishing attacks
function renderMapMarkers(data, label) {
    svg.selectAll("circle").remove(); // Clear existing markers

    const attacksByCountry = d3.rollups(
        data,
        v => v.length,
        d => d.countryname
    );

    attacksByCountry.forEach(([country, count]) => {
        const coordinates = getCoordinates(country);
        if (coordinates) {
            svg.append("circle")
                .attr("cx", projection(coordinates)[0])
                .attr("cy", projection(coordinates)[1])
                .attr("r", Math.sqrt(count) * 2)
                .attr("fill", label === "all" ? "#ff0000" : "#00ff00") // Color different for filtered vs all data
                .attr("opacity", 0.7)
                .attr("stroke", "#000")
                .on("mouseover", function(event) {
                    d3.select(this).transition().attr("r", Math.sqrt(count) * 2.5);
                    tooltip.transition().style("opacity", .9);
                    tooltip.html(`Country: ${country}<br>Attacks: ${count}`)
                        .style("left", (event.pageX + 10) + "px")
                        .style("top", (event.pageY - 30) + "px");
                })
                .on("mouseout", function() {
                    d3.select(this).transition().attr("r", Math.sqrt(count) * 2);
                    tooltip.transition().style("opacity", 0);
                });
        }
    });
}

// Utility function to determine if the attack date is recent within a specified time range
function isRecent(dateString, hours) {
    const attackDate = new Date(dateString);
    const now = new Date();
    const diff = (now - attackDate) / (1000 * 60 * 60); // Difference in hours
    return diff <= hours;
}

// Sample function to map country names to approximate coordinates
function getCoordinates(countryName) {
    const countryCoords = {
        "United States": [-98.5795, 39.8283],
        "Brazil": [-51.9253, -14.2350],
        "India": [78.9629, 20.5937],
        "Germany": [10.4515, 51.1657],
        "South Africa": [22.9375, -30.5595],
        // Add more countries as needed...
    };
    return countryCoords[countryName] || null;
}