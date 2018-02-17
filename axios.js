let axios = require("axios");
let cobin_hood = require('./cobinhood');

//Http to curl :https://curlbuilder.com/
//curl to JS   :https://curl.trillworks.com/


function get_paire (){
    axios.get(cobin_hood.get_all_trading_pairs)
        .then(function(response){
            //console.log(response.data.result.trading_pairs.slice());
            return response.data.result.trading_pairs.slice();
        });
}


function multiple_axios() {
    // Requests will be executed in parallel...
    console.log(cobin_hood.get_order_book+"EOS-ETH")
    axios.all([
        axios.get(cobin_hood.get_order_book+"EOS-ETH"),
        axios.get(cobin_hood.get_order_book+"BTC-USD")
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
function request_pairs(url) {

    axios.get('http://jsonplaceholder.typicode.com/todos')
        .then(function (response) {
            return response.body;
        })
        .catch(function (error) {
            return error;
        });
}
console.log(request_pairs());




