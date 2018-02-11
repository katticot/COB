var request = require('request');

var dataString = 'grant_type=client_credentials';

var options = {
    url: 'https://api.edelia-smartbuilding.net/lab-authorization-server-api/oauth/token',
    method: 'POST',
    body: dataString,
    auth: {
        'user': 'EdFDNztOPJMpvfZb05S7myb2gHQJ5l2g',
        'pass': 'De0bzUuQTzHymoXcYoy8ZYxJQTj59D9a'
    }
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
        console.log("gg");
    }
}

request(options, callback);
console.log("fff")
