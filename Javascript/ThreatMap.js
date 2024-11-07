const phishingStats = "https://phishstats.info:2096/api/phishing?_where=(url,like,~microsoft~)&_sort=-id"; // phishing atacks carried on urls containing the word microsoft worldwide

// Set up margins and dimensions for the SVG element
const margin = { top: 90, right: 60, bottom: 100, left: 70 },
    width = 800 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

// Create the SVG element with margins and dimensions
const svg = d3.select("#phishingStats")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom + 100)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

async function fetchPhishingStatistics() {
    try {
        const response = await fetch(phishingStats);
        
        // Check if the response is okay i.e. (status code in the range 200–299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        console.log("plsss workkkkk");
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Call the async function
fetchPhishingStatistics();