let btc = document.getElementById("bitcoin");
let eth = document.getElementById("ethereum");
let doge = document.getElementById("dogecoin");

// let settings = {
//     "async" : true,
//     "scrossDomain": true,
//     "url" : "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
//     "method" : "get",
//     "headers": {}
// }
// $.ajax(settings).done(function(response){
//     console.log(response);
//     btc.innerHTML = response.bitcoin.usd;
//     eth.innerHTML = response.ethereum.usd;
//     doge.innerHTML = response.dogecoin.usd;
// })

const fetchCoin = async () => {
    const response = fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd");

    response.then(data =>  data.json())
    .then(obj => {
        console.log(obj);
        btc.innerHTML = obj.bitcoin.usd;
        eth.innerHTML = obj.ethereum.usd;
        doge.innerHTML = obj.dogecoin.usd;
    });
}
fetchCoin();