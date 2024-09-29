// General margins for the visualization
const margin = { top: 90, right: 30, bottom: 100, left: 70 },
    width = 800 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

// Definig or creating the svg element:
const svg = d3.select("#Phishing")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom + 100)
    .append("g") // apending the g element used to group similar elements together
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  //  I'm using the CSV file here to get access to the raw data bc my API fetch request is getting blocked bc of the CORS error , telling me i have missing response headers and idk how to fix it so i'll demonstrate the data locally for now:(
d3.csv("https://raw.githubusercontent.com/chamanthmvs/Phishing-Website-Detection/refs/heads/master/extracted_csv_files/phishing-urls.csv").then(function (data) {

    // Create an array of victim counts ranging from 0 to 1,000,000 (for demonstration purposes. The csv data does not have values for the number of victims data i want to demonstrate in relation to the different phishing website urls people have fallen victims of)
    const victimsArray = Array.from({ length: 80 }, (_, i) => Math.ceil(Math.random() * 1000000));//using ceil here for better rounded up values as well as some form of object destructuring where the i is extracted while "ignoring" the "_" first parameter.

    // Filter the first 80 rows from the CSV and assign victim counts
    const filteredData = data.slice(0, 80).map((d, i) => ({
        Domain: d.Domain,   // Use the domain name from CSV
        Victims: victimsArray[i] // Assign random victim count from the victimsArray
    }));

    // Create X Scale 
    const xScale = d3.scaleBand() //using scaleBand bc the domain names are categorical and thus its better to use this as opposed to linear scale  considering that Band scales are typically used for bar charts with an ordinal or categorical dimension.
        .domain(filteredData.map(d => d.Domain)) // Use the Domain from CSV file 
        .range([0, width])
        .padding(0.1); // Padding between bars

    // Create Y Scale (range from 0 to 1,000,000 as per the victimsArray)
    const yScale = d3.scaleLinear()
        .domain([0, 1000000]) // Y-axis goes up to 1M
        .range([height, 0]); // // Inverting range for d3 bc usually you read from the top to bottom as opposed to bottom to top hence  (0 is at the top)

    // Append X Axis
    svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(xScale))
        .selectAll("text")
        .style("fill", "white")
        .attr("transform", "rotate(-90)")
        .style("text-anchor", "end")       
        .attr("dy", "-0.5em")              
        .attr("dx", "-0.9em");

    // Append Y Axis
    svg.append("g")
        .call(d3.axisLeft(yScale))
        .selectAll("text")
        .style("fill", "white");

    // Add Bars
    svg.selectAll(".bar")
        .data(filteredData)
        .enter()
        .append("rect") //using "rect" to show the actual bars as opposed to circles bc i'm making a bar chart
        .attr("class", "bar")
        .attr("x", d => xScale(d.Domain))
        .attr("y", d => yScale(d.Victims))
        .attr("width", xScale.bandwidth())
        .attr("height", d => height - yScale(d.Victims)) // Height based on the victimsArray values
        .style("fill", "red");

    // Add chart title
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", -20)
        .attr("text-anchor", "middle")
        .style("font-size", "24px")
        .style("fill", "white")
        .text(" The Number of Phishing Victims by Domain");

    // Add X-axis label
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", height + margin.bottom + 90)
        .attr("text-anchor", "middle")
        .style("font-size", "20px")
        .style("fill", "white")
        .text("Types of phishing website url by domain name");

    // Add Y-axis label
    svg.append("text")
        .attr("x", -(height / 2))
        .attr("y", -50)
        .attr("text-anchor", "middle")
        .attr("transform", "rotate(-90)")
        .style("font-size", "14px")
        .style("fill", "white")
        .text("Number of Victims in each phishing url");

});