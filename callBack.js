const request = require('request');

let first = (callback) => {
    request('http://www.yahoo.com', function (error, response, body) {
        console.log('Yahoo statusCode:', response && response.statusCode);
        callback(third);
    })
};

let second = (callback) => {
    request('http://www.google.com', function (error, response, body) {
        console.log('Google statusCode:', response && response.statusCode);
        callback();
    });
}

let third = () => {
    request('http://www.youtube.com', function (error, response, body) {
        console.log('Youtube statusCode:', response && response.statusCode);
        
    });
}

first(second);

