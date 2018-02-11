var request = require('request');

var host ="https://api.cobinhood.com"
//Http to curl :https://curlbuilder.com/
//curl to JS   :https://curl.trillworks.com/
// Public 
//-----------------------------------------------
//System
var get_system_time ="/v1/system/time"
var get_system_info ="/v1/system/info"
//Market
var get_all_currenciers   ="/v1/market/currencies"
var get_all_trading_pairs ="/v1/market/trading_pairs"
var get_order_book        = "/v1/market/orderbooks/" // /v1/market/orderbooks/<trading_pair_id> get with get_all_trading_pairs
var get_trading_statistics="/v1/market/stats/"
var get_tickers           = "/v1/market/tickers/" // /v1/market/tickers/<trading_pair_id> get with get_all_trading_pairs
var recent_trades         ="/v1/market/trades/"    // /v1/market/trades//<trading_pair_id> get with get_all_trading_pairs      
var options = {
    url: host+get_order_book+"COB-BTC"
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        var json_response =JSON.parse(body).result.orderbook
        var spread = ((json_response.bids[0][0]-json_response.asks[0][0])/json_response.bids[0][0]*100)
        //var spread = 0.1-0.099
        console.log(json_response.bids[0]);
        console.log(json_response.asks[0]);
        console.log(spread);
    }
}


request(options, callback);
console.log(options.url)
