//Todo utiliser axios
// faire un array d'objet contenant la propriété spread lié à une map du type [paire]=spread de la paire
var request = require('request');
var cobin_hood = require('./cobinhood');
const host ="https://api.cobinhood.com"
//Http to curl :https://curlbuilder.com/
//curl to JS   :https://curl.trillworks.com/
// Public 
//-----------------------------------------------
const url_de_requete = cobin_hood.get_order_book;
let options = {
    url: url_de_requete
};

 let public = {
    "request_get_spread": function(paire) {
        options.url+=paire;
        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                //var json_response =JSON.parse(body).result.orderbook
                //var spread = ((json_response.bids[0][0]-json_response.asks[0][0])/json_response.bids[0][0]*100)
                console.log("URL :"+options.url);
                console.log(paire + " :"+ public.get_spread(body));
            }
    }
    request(options, callback);
},
     "get_spread" : function (body){
         let orderbook=JSON.parse(body).result.orderbook
         var spread = ((orderbook.bids[0][0]-orderbook.asks[0][0])/orderbook.bids[0][0]*100)
         console.log(" :"+spread);
         return spread
     },

     "get_spread_axios" : function (orderbook){

         var spread = ((orderbook.bids[0][0]-orderbook.asks[0][0])/orderbook.bids[0][0]*100)
         return spread
     }

};

let get_spread;
let request_get_spread;
exports.request_get_spread=public.request_get_spread;
exports.get_spread=public.get_spread;
exports.get_spread_axios=public.get_spread_axios;

//public.request_get_spread("ETHOS-ETH")



