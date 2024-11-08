const phishingUrl = 'https://phishstats.info:2096/api/phishing?_where=(ip,eq,1.1.1.1)';

// Set up margins and dimensions for the SVG element
const margin = { top: 90, right: 60, bottom: 100, left: 70 },
    width = 800 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

// Create the SVG element with margins and dimensions
const svg = d3.select("#phishing")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom + 120)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Scales for the x and y axes
const xScale = d3.scaleBand().range([0, width]).padding(0.5);
const yScale = d3.scaleLinear().domain([0, 3000000]).range([height, 0]);


// Async function to fetch data replacing the ".then"
async function fetchData() {

    try {
        const response = await fetch(phishingUrl);
        const data = await response.json();
        const limitedData = data.slice(0, 60);
        
        // Update xScale domain
        xScale.domain(limitedData.map(d => d.host));
        
        // Append x-axis with styles
        svg.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(xScale))
            .selectAll("text")
            .style("fill", "white")
            .style("font-size", "10px")
            .attr("transform", "rotate(-90)")
            .style("text-anchor", "end")
            .attr("dy", "-0.5em")
            .attr("dx", "-0.9em");

        // Append y-axis with "M" format. Imaan suggested its beter to display the values as "3M" instead with all the zeroes.
        svg.append("g")
            .call(d3.axisLeft(yScale).tickFormat(d => d / 1e6 + "M"))
            .selectAll("text")
            .style("fill", "white")
            .style("font-size", "12px");

        // Append chart title and axis labels
        svg.append("text")
            .attr("id", "title")
            .attr("x", width / 2)
            .attr("y", 0 - (margin.top / 1.2))
            .attr("text-anchor", "middle")
            .attr("font-size", "20px")
            .attr("font-style", "italic")
            .attr("font-weight", "bold")
            .style("fill", "white")
            .text("Title: Different phishing scams and the number of victims that have fallen for them.");

        svg.append("text")
            .attr("class", "x-axis-label")
            .attr("x", width / 2)
            .attr("y", height + 190)
            .attr("text-anchor", "middle")
            .style("fill", "white")
            .style("font-size", "18px")
            .text("URLs by Host Name");

        svg.append("text")
            .attr("class", "y-axis-label")
            .attr("text-anchor", "middle")
            .attr("transform", "rotate(-90)")
            .attr("x", -(height / 2))
            .attr("y", -50)
            .attr("dx", "1em")
            .style("fill", "white")
            .style("font-size", "15px")
            .text("Number of victims by Id in each Phishing URL Host Name");

        // Draw the bars
        svg.selectAll(".bar")
            .data(limitedData)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", d => xScale(d.host))
            .attr("y", d => yScale(d.id))
            .attr("width", xScale.bandwidth())
            .attr("height", d => height - yScale(d.id))
            .attr("fill", d =>{ // basically applying eahc color to each specifc id range so thats its eaiser for users to undeerstand the different levels of danger based on color feedback
                if (d.id > 2000000) return "red"; // Most dangerous URL
                if (d.id >= 1800000 && d.id <= 2000000) return "orange"; // Moderate dangerous
                if (d.id < 500000) return "blue"; // Least dangerous
                return "grey"; // Default color if not matching any category 
            })
            .on("mouseover", (event, d)=>{
                d3.select("#tooltip")
                  .style("left", event.pageX + "px")
                  .style("top", event.pageY + "px")
                  .style("display", "inline-block")
                  .html(`<strong>No of Victims:</strong> ${d.id}<br>
                   <strong>Title:</strong> ${d.title}<br>
                   <strong>Actual URL:</strong> ${d.url}<br>
                   <strong>ISP:</strong> ${d.isp}`);
            })
            .on("mouseout", () => d3.select("#tooltip").style("display", "none"));


            // Set up legend
          const legendData = [
          { color: "red", label: "Most dangerous phishing URL (Red)", threshold: 2000000 },
          { color: "orange", label: "Moderate dangerous URL (Orange)", threshold: 1800000 },
          { color: "blue", label: "Least dangerous URL (Blue)", threshold: 500000 }
           ];

         const legend = svg.append("g")
         .attr("class", "legend")
         .attr("transform", `translate(${width - 257}, ${-10})`);



            //apppending legend  btns
         legend.selectAll("rect")
            .data(legendData)
            .enter().append("rect")
            .attr("x", 0)
            .attr("y", (d, i) => i * 25)
            .attr("width", 25)
            .attr("height", 15)
            .attr("rx", 6)
            .attr("ry", 6)
            .attr("class", "legend-btn")
            .style("fill", d => d.color)
            .style("cursor", "pointer")
            .on("click", (event, d) => {
                //Each time a user clicks on a specifc color bttun on the key, highlight the bars matching the selected color and grey pout the others
                svg.selectAll(".bar")
                    .transition()
                    .duration(500)
                    .attr("fill", bar => {
                        if (d.color === "red" && bar.id > 2000000) return "red";
                        if (d.color === "orange" && bar.id >= 1800000 && bar.id <= 2000000) return "orange";
                        if (d.color === "blue" && bar.id < 500000) return "blue";
                        return "grey";
                    });
                });
         // Appending legend labels 
         legend.selectAll("text")
             .data(legendData)
             .enter().append("text")
             .attr("x", 26)
             .attr("y", (d, i) => i * 30 + 5)
             .style("fill", "white")
             .text(d => d.label);

                //Legend Title 
         legend.append("text") 
             .attr("x", 15) 
             .attr("y", -30) 
             .attr("text-anchor", "middle")
             .attr("font-size", "14px")
             .attr("font-style", "italic")
             .attr("font-weight", "bold")
             .style("fill", "white")
             .text("Key: ")

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchData();

// Tooltip setup
d3.select("body")
    .append("div")
    .attr("id", "tooltip")
    .style("position", "absolute")
    .style("display", "none")
    .style("background-color", "black")
    .style("color", "white")
    .style("padding", "10px")
    .style("border-radius", "8px");
