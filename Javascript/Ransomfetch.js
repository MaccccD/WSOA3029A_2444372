const ransomURL = 'https://api.ransomware.live/recentvictims';

//this API contains data about different cybersecurity attacks done on different victims of the world by IP address and different ransomware attacks.

fetch(ransomURL)
  .then(response => response.json())
  .then(data => {
      console.log(data);
      console.log(" work, plsss!");
  })
  .catch(error => console.error("Error fetching data:", error));
  