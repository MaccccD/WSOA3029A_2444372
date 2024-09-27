const ransomURL = 'https://api.ransomware.live/';

const requestOptions = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    },
   
};

fetch(ransomURL, requestOptions)
  .then(response => response.json())
  .then(data => {
      console.log(data);
      createPhishingVisualizations(data);
      console.log(" work, plsss!");
  });

  