const phishingUrl = 'https://phishstats.info/';
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

const requestOptions = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    },
   
};

fetch(proxyUrl + phishingUrl, requestOptions)
  .then(response => response.json())
  .then(data => {
      console.log(data);
      createPhishingVisualizations(data);
      console.log("plsss workkkkk");
  })
  .catch(error => console.error("Error fetching data:", error));
