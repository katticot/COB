var request = require('request');
var pairs = [];

const host ="https://api.cobinhood.com"
//Http to curl :https://curlbuilder.com/
//curl to JS   :https://curl.trillworks.com/
// Public 
//-----------------------------------------------
//System
const get_system_time ="/v1/system/time"
const get_system_info ="/v1/system/info"
//Market
const get_all_currenciers   ="/v1/market/currencies"
const get_all_trading_pairs ="/v1/market/trading_pairs"
const get_order_book        = "/v1/market/orderbooks/" // /v1/market/orderbooks/<trading_pair_id> get with get_all_trading_pairs
const get_trading_statistics="/v1/market/stats/"
const get_tickers           = "/v1/market/tickers/" // /v1/market/tickers/<trading_pair_id> get with get_all_trading_pairs
const recent_trades         ="/v1/market/trades/"    // /v1/market/trades//<trading_pair_id> get with get_all_trading_pairs      
const options = {
    url: host+get_all_trading_pairs
};


//options.url=host+get_all_trading_pairs
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
}

request(options, callback);


