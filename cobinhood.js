const request = require('request');
let pairs = [];

let host ="https://api.cobinhood.com";
//Http to curl :https://curlbuilder.com/
//curl to JS   :https://curl.trillworks.com/
// Public 
//-----------------------------------------------
//System

const get_system_info =host+"/v1/system/info/";
const get_system_time =host+"/v1/system/time/";
//Market
const get_all_currenciers   =host+"/v1/market/currencies/";
const get_all_trading_pairs =host+"/v1/market/trading_pairs/";
const get_order_book        =host+"/v1/market/orderbooks/"; // /v1/market/orderbooks/<trading_pair_id> get with get_all_trading_pairs
const get_trading_statistics=host+"/v1/market/stats/";
const get_tickers           = host + "/v1/market/tickers/"; // /v1/market/tickers/<trading_pair_id> get with get_all_trading_pairs
const get_recent_trades     =host+"/v1/market/trades/";    // /v1/market/trades//<trading_pair_id> get with get_all_trading_pairs
module.exports ={get_system_info,
        get_system_time,
        get_all_currenciers,
        get_all_trading_pairs,
        get_order_book,
        get_trading_statistics,
        get_tickers,
        get_recent_trades,
        };
const options = {
    //url: host+get_order_book+paire
};


// options.url=host+get_trading_statistics
// function callback(error, response, body) {
    
//     if (!error && response.statusCode == 200) {
//         // console.log(json_response);
//         var json_response =JSON.parse(body).result[0]

//         // console.log(options.url);
//         console.log(json_response)
//     }
// }

options.url=get_all_trading_pairs;
function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        // console.log(json_response);
        let json_response =JSON.parse(body).result.trading_pairs;
        for (let pair in json_response) {
            pairs.push(json_response[pair].id)
          }



    for (let pair in pairs) {

    console.log("paire :"+pairs[pair]);

    options.url=host+get_order_book+pairs[pair];
    function callback(error, response, body) {
        console.log(options.url)
        if (!error && response.statusCode == 200) {
            var json_response =JSON.parse(body).result.orderbook
            var spread = ((json_response.bids[0][0]-json_response.asks[0][0])/json_response.bids[0][0]*100)
            //console.log(json_response.bids[0]);
            //console.log(json_response.asks[0]);
            console.log(paire + " :"+spread);
        }
    }
  }
        // console.log(options.url);

    }
}

// for (var pair in pairs) {
//     console.log("paire :"+pairs[pair])
//   }




//request(options, callback);



