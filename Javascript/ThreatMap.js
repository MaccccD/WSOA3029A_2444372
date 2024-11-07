const phishingStats = "https://phishstats.info:2096/api/phishing?_where=(url,like,~microsoft~)&_sort=-id"; // phishing atacks carried on urls containing the word microsoft worldwide

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