const phishingUrl = 'https://phishstats.info/';

const requestOptions = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    },
   
};

fetch(phishingUrl, requestOptions)
  .then(response => response.json())
  .then(data => {
      console.log(data);
      createPhishingVisualizations(data);
      console.log("plsss workkkkk");
  })
  .catch(error => console.error("Error fetching data:", error));
