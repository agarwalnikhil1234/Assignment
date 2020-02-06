
const request = require('request');
async function f() {
   request('http://www.google.com', function (error, response, body) {
  console.log('Google statusCode:', response && response.statusCode); 
});

 request('http://www.yahoo.com', function (error, response, body) {
  console.log('Yahoo statusCode:', response && response.statusCode); 
});}

 f();
new Promise(function (resolve, reject) {
  setTimeout(() =>  resolve(request('http://www.yahoo.com', function (error, response, body) {
    console.log('Yahoo statusCode:', response && response.statusCode);
  })), 3000);
  setTimeout(() =>   resolve(request('http://www.google.com', function (error, response, body) {
    console.log('Google statusCode:', response && response.statusCode);
  })),1000);
  setTimeout(() =>   resolve(request('http://www.youtube.com', function (error, response, body) {
    console.log('Youtube  statusCode:', response && response.statusCode);
  })),5000);
});

