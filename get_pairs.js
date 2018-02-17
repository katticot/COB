var request = require('request');
var cobin_hood = require('./cobinhood');

var pairs = [];

const options = {
    url: cobin_hood.get_all_trading_pairs
};

function lister_les_paires () {
    function callback(error, response, body) {    
        if (!error && response.statusCode == 200) {
            // console.log(json_response);
            var reponse =JSON.parse(body).result.trading_pairs
            for (var pair in reponse) {
                pairs.push(reponse[pair].id)
              }
     
            for (var pair in pairs) {
        console.log(pairs[pair])
      }
        }
    };
    request(options, callback);
}
let get_all_pairs;
module.exports.get_all_pairs = lister_les_paires;



