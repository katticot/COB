const axios = require('axios');
const toto = require('./lib/routes/rest');

const host ="https://api.cobinhood.com";
//Http to curl :https://curlbuilder.com/
//curl to JS   :https://curl.trillworks.com/
// Public Endpoint
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
const get_recent_trades     =host+"/v1/market/trades/";    // /v1/market/trades/<trading_pair_id> get with get_all_trading_pairs
const get_candles     =host+"/v1/chart/candles/";    // /v1/chart/candles/<trading_pair_id> get with get_all_trading_pairs
//Todo sortir ce tableau
var all_trading_pairs =[]


function forEach(tableau, action) {
    for (var i = 0; i < tableau.length; i++)
        action(tableau[i]);
}

function storeArray(tableau,array_copy) {
    for (var i = 0; i < tableau.length; i++)
        array_copy.push(tableau[i]);
}

function printArray(tableau) {
    for (var i = 0; i < tableau.length; i++)
        console.log(tableau[i]);
}

const public_api = {
    "get_all_trading_pairs": function() {
         axios.get(get_all_trading_pairs)
            .then(function (response) {

                console.log(response.data.result.trading_pairs);
                // console.log(all_trading_pairs)
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    "get_all_spread": function() {
        axios.get(get_all_trading_pairs)
            .then(function (response) {
                //console.log(response.data.result.trading_pairs);
                storeArray(response.data.result.trading_pairs,all_trading_pairs);
                // console.log(all_trading_pairs)
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    "get_all_currenciers": function() {
        axios.get(get_all_currenciers)
            .then(function (response) {
                //console.log(response.data.result.trading_pairs);
                // storeArray(response.data.result.trading_pairs,all_trading_pairs);
                 console.log(response.data.result.currencies)
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    "get_all_trading_statistics": function() {
        axios.get(get_trading_statistics)
            .then(function (response) {
                //console.log(response.data.result.trading_pairs);
                // storeArray(response.data.result.trading_pairs,all_trading_pairs);
                console.log(response.data.result)
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    "get_trading_statistics": function(pair) {
        axios.get(get_trading_statistics)
            .then(function (response) {
                //console.log(response.data.result.trading_pairs);
                // storeArray(response.data.result.trading_pairs,all_trading_pairs);
                console.log(response.data.result[pair])
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    "get_currency": function(currency) {
        axios.get(get_all_currenciers)
            .then(function (response) {
                //console.log(response.data.result.trading_pairs);
                // storeArray(response.data.result.trading_pairs,all_trading_pairs);
                    let currencies =response.data.result.currencies
                    for (var var_currency in currencies) {
                        if(currencies[var_currency].currency==currency)console.log(currencies[var_currency]);
    }
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    "get_order_book": function(pair) {
        axios.get(get_order_book+pair)
            .then(function (response) {
                //console.log(response.data.result.trading_pairs);
                // storeArray(response.data.result.trading_pairs,all_trading_pairs);
                console.log(response.data.result.orderbook)
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    "get_asks": function(pair) {
        axios.get(get_order_book+pair)
            .then(function (response) {
                //console.log(response.data.result.trading_pairs);
                // storeArray(response.data.result.trading_pairs,all_trading_pairs);
                console.log(response.data.result.orderbook.asks)
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    "get_bids": function(pair) {
        axios.get(get_order_book+pair)
            .then(function (response) {
                //console.log(response.data.result.trading_pairs);
                // storeArray(response.data.result.trading_pairs,all_trading_pairs);
                console.log(response.data.result.orderbook.bids)
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    "get_tickers": function(pair) {
        axios.get(get_tickers+pair)
            .then(function (response) {
                //console.log(response.data.result.trading_pairs);
                // storeArray(response.data.result.trading_pairs,all_trading_pairs);
                console.log(response.data.result.ticker)
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    "get_recent_trades": function(pair) {
        axios.get(get_recent_trades+pair)
            .then(function (response) {
                //console.log(response.data.result.trading_pairs);
                // storeArray(response.data.result.trading_pairs,all_trading_pairs);
                console.log(response.data.result.trades)
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    "get_candles": function(pair) {
        axios.get(get_candles+pair)
            .then(function (response) {
                //console.log(response.data.result.trading_pairs);
                // storeArray(response.data.result.trading_pairs,all_trading_pairs);
                console.log(response.data.result.candles)
            })
            .catch(function (error) {
                console.log(error);
            })
    },

    }
//Todo get_spread_of.BTC-USD
//Todo get_spread_of('BTC-USD')
//Todo get_spread_of('BTC-USD')
//  public_api.get_all_currenciers();
//  public_api.get_all_trading_pairs();
// public_api.get_currency('BDG');
// public_api.get_bids('OMG-BTC');
// public_api.get_trading_statistics('BAR-BTC');
// public_api.get_tickers('BAR-BTC');
// public_api.get_recent_trades('BAR-BTC');
public_api.get_candles('BAR-BTC');
