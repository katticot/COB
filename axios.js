let axios = require("axios");
let cobin_hood = require('./cobinhood');

//Http to curl :https://curlbuilder.com/
//curl to JS   :https://curl.trillworks.com/



function request_get_order_book(pair) {
    return axios.get(cobin_hood.get_order_book+pair)
}

// Make a request for a user with a given ID

let requests = [];
requests.push(request_get_order_book('ETH-USD'));
requests.push(request_get_order_book('BTC-USD'));

function multiple_axios() {
    // Requests will be executed in parallel...
    axios.all(requests)
        .then(axios.spread(function () {
            // Both requests are now complete
            //console.log(acct);
            //console.log(perms);

            for (let index=0;index < arguments.length;index++) console.log(arguments[index].data);
        }));
}

multiple_axios();





