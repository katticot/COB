var axios = require("axios");
const host ="https://api.cobinhood.com";
var spread = require('./get_spread.js');

//Http to curl :https://curlbuilder.com/
//curl to JS   :https://curl.trillworks.com/
// Public
//-----------------------------------------------
//System
const get_system_time ="/v1/system/time"
const get_system_info ="/v1/system/info"
//Market
const get_all_currenciers   ="/v1/market/currencies/"
const get_all_trading_pairs ="/v1/market/trading_pairs/"
const get_order_book        = "/v1/market/orderbooks/" // /v1/market/orderbooks/<trading_pair_id> get with get_all_trading_pairs
const get_trading_statistics="/v1/market/stats/"
const get_tickers           = "/v1/market/tickers/" ;// /v1/market/tickers/<trading_pair_id> get with get_all_trading_pairs
const recent_trades         ="/v1/market/trades/" ;   // /v1/market/trades//<trading_pair_id> get with get_all_trading_pairs
const url_de_requete = host+get_order_book;
var pairs

function get_paire (){
    axios.get(host+get_all_trading_pairs)
        .then(function(response){
            //console.log(response.data.result.trading_pairs.slice());
            return response.data.result.trading_pairs.slice();
        });
}


function multiple_axios() {
    // Requests will be executed in parallel...
    console.log(host+get_order_book+"EOS-ETH")
    axios.all([
        axios.get(host+get_order_book+"EOS-ETH"),
        axios.get(host+get_order_book+"BTC-USD")
        //axios.get(host+get_all_trading_pairs+"ETHOS-ETH")
])
.then(axios.spread(function (userResponse, reposResponse) {
        //... but this callback will be executed only when both requests are complete.
        console.log('User', userResponse.data);
        //console.log('Repositories', reposResponse.data);
       // console.log('Repositories', reposResponse.data.result.orderbook);
       // console.log('request', spread.get_spread(reposResponse.data));
    }));
}
multiple_axios()





