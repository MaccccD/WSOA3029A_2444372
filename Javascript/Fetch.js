const phishingUrl = 'https://phishstats.info:2096/api/phishing?_where=(ip,eq,1.1.1.1)';
//this API contains data abt the phishing attacks that have been done on urls via an IP Address that  user has user to access a specific phishing site.
//used this script just to test the API fetch.
fetch(phishingUrl)
  .then(response => response.json())
  .then(data => {
      console.log(data);
      console.log("plsss workkkkk");
  })
  .catch(error => console.error("Error fetching data:", error));
