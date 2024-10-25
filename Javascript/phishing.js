//Fetching data from the API before I begin the actual data visualization
const phishingUrl = 'https://phishstats.info:2096/api/phishing?_where=(ip,eq,1.1.1.1)';
//this API contains data abt the phishing attacks that have been done on urls via an IP Address that  user has user to access a specific phishing site.


// Setting  up margins and dimensions for the SVG element. I wanted to use Inner Width and Inner height considering the theme of my site but it kidn of did not scale properly
const margin = { top: 90, right: 60, bottom: 100, left: 70 },
    width = 800 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

//Create the SVG element: 
const svg = d3.select("#Phishing")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom + 100)
    .append("g") // Grouping  similar elements together
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

//Setting  up scales. For the x-axis, since im making a bar chart , as opposed to using scale Linear, I'm  gonna use "scaleBand" bc Band scales are typically used for bar charts with an ordinal or categorical dimension.
const xScale = d3.scaleBand().range([0, width]).padding(0.5); //for the x-axis 
const yScale = d3.scaleLinear().domain([0, 3000000]).range([height, 0]); //for the y-axis

//Append the y-axis
svg.append("g")
  .call(d3.axisLeft(yScale)
  .tickFormat(d3.format("d"))) // this just to remve the commas within the numbers bc they did not scale properly
  .selectAll("text") // Target all text within the axis
  .style("fill", "white") // Correctly apply white text color
  .style("font-size", "12px");

//Fetch the data from the API  and processing  it:
fetch(phishingUrl)
    .then(response => response.json())
    .then(data => {
        //for testing purposes i will use slice to cap the data at just the first 10 urls just so its easier to deal with and thus understand
        const limitedData = data.slice(0, 60);
        console.log(limitedData + "is workinggg!");
        // Update the xScale domain to be the 10 URLs
        xScale.domain(limitedData.map(d => d.host));

        //Append x-axis:
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

        //Append x-axis label :
        svg.append("text")
           .attr("class", "x-axis-label")
           .attr("text-anchor", "middle")
           .attr("x", width / 2) //placing the label in the centre of the axis
           .attr("y", height + 190)  //space between the label and the axis
           .style("fill", "white")  
           .style("font-size", "18px")  
           .text("URLs by Host Name");


        //Append the y-axis label :
        svg.append("text")
        .attr("class", "y-axis-label")
        .attr("text-anchor", "middle")
        .attr("transform", `rotate(-90)`)
        .attr("x",-(height / 2)) //position the label in the middle of the y-axis vertically
        .attr("y", -60) //space creation 
        .attr("dx", "1em")
        .style("font-size", "14px")
        .style("fill", "white")
        .text("Number of victims by Id in each Phishing URL Host Name");


        //adding chart Title
        svg
        .append("text")
        .attr("id", "title")
        .attr("x", (width / 2))
        .attr("y", 0 - (margin.top / 1.2))
        .attr("text-anchor", "middle")
        .attr("font-size", "20px")
        .attr("font-style", "italic")
        .attr("font-weight", "bold")
        .style("fill", "white")
        .text("Title: Different phishing scams and the number of victims that have fallen for them.");


        // Creating the actual bars:
        svg.selectAll(".bar") // using "bar" as opposed to dots bc Im not going to append circles but a "rect"
            .data(limitedData)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", d => xScale(d.host))
            .attr("y", d => yScale(d.id)) // hence the range is up to 3M bc the id values in the data go to up to 2 and a half million
            .attr("width", xScale.bandwidth())
            .attr("height", d => height - yScale(d.id))
            .attr("fill", "grey")
            .on("mouseover", (event, d) => { 
                // Show tooltip with additional data on hover
                const tooltip = d3.select("#tooltip")
                    .style("left", event.pageX + "px")
                    .style("top", event.pageY + "px")
                    .style("display", "inline-block")
                    .html(`<strong>No of Victims:</strong> ${d.id}<br>
                           <strong>Title:</strong> ${d.title}<br>
                           <strong>Actual URL:</strong> ${d.url}<br>
                           <strong>Internet Service Provider:</strong>${d.isp}`); // using string interpoloation via backticks  here for easier retrieval of the items that need to show on the toop tip of each bar 
            })
            .on("mouseout", () => {
                d3.select("#tooltip").style("display", "none");
            });

        //Legend setup in here :
        const legend = svg.append("g")
            .attr("class", "legend")
            .attr("transform", `translate(${width - 257}, ${-10})`); //movimg it further left so all the legend Data displays properly

        //Define the legend data
        const legendData = [
            { color: "red", label: "Most dangerous phishing URL", threshold: 2000000 },
            { color: "orange", label: "Moderate dangerous phishing URL", threshold: 1800000 },
            { color: "blue", label: "Least dangerous phishing URL", threshold: 500000 }
        ];

       //Append legend labels
       legend.selectAll("text")
       .data(legendData)
       .enter().append("text")
       .attr("x", 26)
       .attr("y", (d, i) => i * 30 + 5)
       .style("fill", "white")
       .text(d => d.label);


       //Legend Title 
       legend.append("text") 
             .attr("x", 20) 
             .attr("y", -30) 
             .attr("text-anchor", "middle")
             .attr("font-size", "14px")
             .attr("font-style", "italic")
             .attr("font-weight", "bold")
             .style("fill", "white")
             .text("Key : ")



        // Append legend buttons
        legend.selectAll("rect")
            .data(legendData)
            .enter().append("rect")
            .attr("x", 0)
            .attr("y", (d, i) => i * 25) 
            .attr("width", 25)
            .attr("height", 15) 
            .attr("rx", 6) // Rounded corners (horizontal radius)
            .attr("ry", 6) // Rounded corners (vertical radius)
            .attr("class", "legend-btn")
            .style("fill", d => d.color)
            .style("cursor", "pointer")
            .on("click", (event, d) => {
                legend.selectAll(".legend-btn")
                .style("fill", d => d.color);

                //Each btn clic unique functionality :
                d3.select(event.currentTarget)
                .style("fill", d.color);
                // Filter bars based on the danger level. This is jst a color-co-ordinated  hierarchy system i have developed to showcase which phishing sites via url are more dangerous than others, hence they have more no. of victims than others.
                svg.selectAll(".bar")
                    .transition() // allows for ease switch between each button clicked
                    .duration(500)
                    .attr("fill", bar => {
                    if (d.color === "red" && bar.id > 2000000) return "red"; // Highlight most dangerous
                    if (d.color === "orange" && [1870615, 1898011, 1898527, 1967482].includes(bar.id)) return "orange"; // Moderate dangerous
                    if (d.color === "blue" && bar.id < 500000) return "blue"; // Least dangerous
                    return "grey"; // Default color for all other bars
                });
            });
    })
    .catch(error => console.error("Error fetching data:", error));

// Tooltip styling where im adding the id element dynamically on here as opposed to through the html
   d3.select("body")
     .append("div")
     .attr("id", "tooltip")
     .style("position", "absolute")
     .style("display", "none")
     .style("background-color", "black") 
     .style("color", "white") 
     .style("padding", "10px")
     .style("border-radius", "8px");

  
      