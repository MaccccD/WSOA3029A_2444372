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

    if (last24Checked) {
        filteredData = filteredData.filter(d => isRecent(d.date_update, 24));
        renderMapMarkers(filteredData, "blue");
    } else if (last48Checked) {
        filteredData = filteredData.filter(d => isRecent(d.date_update, 48));
        renderMapMarkers(filteredData, "orange");
    } else {
        renderMapMarkers(filteredData, "red");
    }
}

// Render map markers for phishing attacks
function renderMapMarkers(data, color = "red") {
    svg.selectAll("circle").remove(); // Clear existing markers

    data.forEach(d => {
        if (d.latitude && d.longitude && d.countryname && d.id && d.url && d.date_update) {
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
                        <strong>Country:</strong> ${d.countryname}<br>
                        <strong>No. of Attacks:</strong> ${d.id}<br>
                        <strong>URL:</strong> <a href="${d.url}" target="_blank">${d.url}</a><br>
                        <strong>Date:</strong> ${new Date(d.date_update).toLocaleString()}
                    `)
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