const phishingUrl = 'https://phishstats.info:2096/api/phishing?_where=(ip,eq,1.1.1.1)';
//this API contains data abt the phishing attacks that have been done on urls via an IP Address that  user has user to access a specific phishing site.
//used this script just to test the API fetch.
async function fetchPhishingData() {
  try {
      const response = await fetch(phishingUrl);
      
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

// Call the async function here 
fetchPhishingData();
