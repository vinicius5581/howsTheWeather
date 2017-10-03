const request = require('request');

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=300%20Embarcadero%20San%20Francisco`,
  json: true
}, (error, response, body) => {
  console.log(body);
});
