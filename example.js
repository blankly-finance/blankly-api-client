// Import the module
let client = require('./src/blankly_client')

// Set the base settings
client.setExchange('coinbase_pro')
client.setKeys({'API_KEY': '***', 'API_SECRET': '***', 'API_PASS': '***'})
client.setSandbox(true)

let symbol = 'BTC-USD'

// Show the account values
client.getProducts(symbol).then(function (response) {
    console.log("Products: ")
    console.log(response.data)
})

client.getAccount().then(function (response) {
    console.log("Account Values: ")
    console.log(response.data)
})

client.marketOrder(symbol, 'buy', 10).then(function (response) {
    console.log("Market Order: ")
    console.log(response.data)
})

client.limitOrder(symbol, 'buy', 10000, .01).then(function (response) {
    console.log("Limit Order ")
    console.log(response.data)
})

client.getOpenOrders(symbol).then(function (response) {
    console.log("Open Orders: ")
    console.log(response.data)
})

client.getFees().then(function (response) {
    console.log("Fees: ")
    console.log(response.data)
})

client.getProductHistory(symbol, Date.now()/1000-(3600*24*60), Date.now()/1000, 3600).then(function (response) {
    console.log("History: ")
    console.log(response.data)
})

client.getOrderFilter(symbol).then(function (response) {
    console.log("Filter: ")
    console.log(response.data)
})

client.getPrice(symbol).then(function (response) {
    console.log("Price: ")
    console.log(response.data)
})