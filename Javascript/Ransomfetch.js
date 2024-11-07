const ransomURL = 'https://api.ransomware.live/recentvictims';
//this API contains data about different cybersecurity attacks done on different victims of the world by IP address and different ransomware attacks.
//Used this script just to test the APi 
async function fetchRansomWareData() {
  try {
      const response = await fetch(ransomURL);
      
      // Check if the response is okay i.e (status code in the range 200–299)
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      console.log("plsss workkkkk!");
  } catch (error) {
      console.error("Error fetching data:", error);
  }
}

// Call the async function
fetchRansomWareData();