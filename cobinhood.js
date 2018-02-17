const axios = require('axios');

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
function request() {
    axios.get('/user?ID=12345')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}