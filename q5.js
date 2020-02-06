const request = require('request');

async function f() {
   request('http://www.google.com', function (error, response, body) {
  console.log('Google statusCode:', response && response.statusCode); 
});}

 f();