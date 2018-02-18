let cobin_hood = require('../../cobinhood');
let spread = require('../../get_spread.js');
let axios = require('axios');

//Http to curl :https://curlbuilder.com/
//curl to JS   :https://curl.trillworks.com/



function request_get_order_book(pair) {
    return axios.get(cobin_hood.get_order_book+pair)
}

function request_function(url) {
    return axios.get(url)
}


let requests = [];
requests.push(request_function(cobin_hood.get_order_book+'ETH-USD'));
//requests.push(request_get_order_book('BTC-USD'));
let _host;
let _api_key;

var request ={
    'initialize': function (host, api_key) {
        host=this._host;
        api_key=this._api_key;
    },
    'get_reqest': request_function

}

module.exports ={request,request_function}

function multiple_spread(request_array,appy_to_response) {
    var response_array;
    // Requests will be executed in parallel...
    axios.all(request_array,response_array)
        .then(axios.spread(appy_to_response));
}

function multiple_request(request_array,response_array) {
    let response_array;
    // Requests will be executed in parallel...
    axios.all(request_array,response_array)
        .then(axios.spread(function () {
            for (let index=0;index < arguments.length;index++) response_array.push(arguments[index].data.result)

        }));
}


let get_spread =function () {
    for (let index=0;index < arguments.length;index++) console.log('spread: '+spread.get_spread_axios(arguments[index].data.result.orderbook));
};

let return_this =function () {
    for (let index=0;index < arguments.length;index++) return arguments[index].data.result;
};

let fill_array =function (array) {
    for (let index=0;index < arguments.length;index++) return arguments[index].data.result;
};

//multiple_spread(requests,get_spread);
multiple_spread(requests,return_this);



// doSomething(data) {
//     console.log(data);
// }



