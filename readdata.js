const { cp } = require("fs");

let apiData = {
  "9nZQhsQ7Bymi4rEuResfSLcWc8KFRQUxGffkLDE7uVny": {
    "name": "PENKE",
    "symbol": "PENKE",
    "profitableTrades": 4.697622346,
    "lossTrades": 4.00247428,
    "pnlForCoin": 0.695148066,
    "tokensIn": 70593747099220,
    "tokensOut": 74310265491387,
    "tokensLeft": 0,
    "comission": 0.00054
  },
  "": {
    "name": "Unknown Coin",
    "symbol": "Unknown Symbol",
    "profitableTrades": 0,
    "lossTrades": 5.00053,
    "pnlForCoin": -5.00053,
    "tokensIn": 0,
    "tokensOut": 0,
    "tokensLeft": 0,
    "comission": 0.00003
  },
  "So11111111111111111111111111111111111111112": {
    "name": "Wrapped SOL",
    "symbol": "SOL",
    "profitableTrades": 0,
    "lossTrades": 0.000065,
    "pnlForCoin": -0.000065,
    "tokensIn": 0,
    "tokensOut": 0,
    "tokensLeft": 0,
    "comission": 0.000065
  },
  "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263": {
    "name": "Bonk",
    "symbol": "Bonk",
    "profitableTrades": 0.001299339,
    "lossTrades": 0.00007,
    "pnlForCoin": 0.001229339,
    "tokensIn": 2512344380,
    "tokensOut": 0,
    "tokensLeft": 2512344380,
    "comission": 0.000175
  },
  "T1oYbAejEESrZLtSAjumAXhzFqZGNxQ4kVN9vPUoxMv": {
    "name": "Daumenfrosch",
    "symbol": "$daumen",
    "profitableTrades": 1.727481512,
    "lossTrades": 2.00214428,
    "pnlForCoin": -0.274662768,
    "tokensIn": 871583724895,
    "tokensOut": 872619239063,
    "tokensLeft": -1035514168,
    "comission": 0.00021
  },
  "2YuSzANgyU9rkFJn5aiAPJqN1kHgtZVQb4nWs1JLjLCw": {
    "name": "Generational Wealth",
    "symbol": "Wealth",
    "profitableTrades": 1.573161137,
    "lossTrades": 2.00218428,
    "pnlForCoin": -0.429023143,
    "tokensIn": 84076119952612,
    "tokensOut": 2917530945910621,
    "tokensLeft": -2833454825958009,
    "comission": 0.00025
  },
  "2xP43MawHfU7pwPUmvkc6AUWg4GX8xPQLTGMkSZfCEJT": {
    "name": "Shinobi",
    "symbol": "NINJA",
    "profitableTrades": 3.383802379,
    "lossTrades": 2.00218428,
    "pnlForCoin": 1.381618099,
    "tokensIn": 225814586125412,
    "tokensOut": 225814586125412,
    "tokensLeft": 0,
    "comission": 0.00025
  }
}

function makeCalculationsAndSendMessage(data) {
  
  let Pnl = 0;
  let ROI = 0;
  let Winrate = 0;
  let soldmorethenbought = 0;
  let uniqueTokens = 0;
  let shitTrades = 0;
  let redTrades = 0;
  let blueTrades = 0;
  let greenTrades = 0;
  let rocketTrades = 0;
  let buys = 0;
  let sells = 0;
  let avgBuySum = 0;
  let comission = 0;
  
  let keysArray = Object.keys(data);
  let valuesArray = Object.values(data)

  for (let i = 0; i < valuesArray.length; i++) {
    if (valuesArray[i].tokensLeft < 0) { // Skip even numbers
      continue;
    }
    if(valuesArray[i].tokensOut === 0) {
      continue
    }    
    Pnl += valuesArray[i].pnlForCoin
    console.log(valuesArray[i])
  }
  Pnl = Pnl - comission  
} 
 
makeCalculationsAndSendMessage(apiData)