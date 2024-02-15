const jsondata = require('./data')
const fs = require('fs');
const axios = require('axios')
//array of token attributes 
const response = {}

// function populateResponseArrayWithTokens()
// function calculateAttributesForEachToken() 
async function processWalletDataMain(walletAddress) {
    try {
      // check for correctness of wallet
      if (!walletAddress) {
        throw new Error('Wallet address is required.');
      }
      const today = new Date();
      const millisecondsSinceEpoch = today.getTime();
      const millisecondsString = millisecondsSinceEpoch.toString();
      const dateOption =  `filter[min_mined_at]: ${millisecondsString}`

      const options = {
        method: 'GET',
        url: `https://api.zerion.io/v1/wallets/${walletAddress}/transactions/`,
        params: {
          currency: 'usd',
          'page[size]': '100',
          'filter[operation_types]': 'trade',
          'filter[asset_types]': 'fungible',
           dateOption,
          'filter[trash]': 'only_non_trash'
        },
        headers: {
          accept: 'application/json',
          authorization: 'Basic emtfZGV2X2ZiMGIyMTIxOWRkYjQ5MGQ5MzUyMTkxNTI2ZmQyNDk5Og=='
        }
      };
  
      return axios
      .request(options)
      .then(function (response) {
        const walletData = response.data;
        console.log(walletData)
        if (!walletData) {
          throw new Error('Invalid data received from the API.');
        }
        // Continue with additional logic or processing here if needed
        const allTradedCoins = {};
        walletData.data.forEach(transaction => {
          const singleCoin = {
            symbol: "",
            name: "",
            quantityIn: 0,
            quantityOut: 0,
            comission: 0,
            tokensLeft: 0,
            tokensLeftUSD: 0,
            valueIn: 0,
            valueOut: 0, 
            pnl: 0,
            pnlPercentage: 0,
            buyTrades: 0,
            sellTrades: 0
          }
        const transfers = transaction.attributes.transfers;
          let transactionValue = 0;
          let coinSymbol = "";
          let valueIn = 0; valueOut = 0;
        transfers.forEach(transfer => {
          if (transfer.fungible_info) {
              if(transfer.fungible_info.symbol !== "ETH") 
              {
                  coinSymbol = transfer.fungible_info.symbol;
                  const coinName = transfer.fungible_info.name;
                  if (!allTradedCoins[coinSymbol]) {
                      allTradedCoins[coinSymbol] = singleCoin
                      allTradedCoins[coinSymbol].symbol = coinSymbol
                      allTradedCoins[coinSymbol].name = coinName
                  }
                  const quantity = parseFloat(transfer.quantity.float);
                  if (transfer.direction === 'in') {
                      allTradedCoins[coinSymbol].quantityIn += quantity
                      allTradedCoins[coinSymbol].buyTrades++
                  }
                  else if (transfer.direction === 'out') {
                      allTradedCoins[coinSymbol].quantityOut += quantity
                      allTradedCoins[coinSymbol].sellTrades++
  
                  }
              }
              else {
                  transactionValue = transfer.value
                  if (transfer.direction === 'out') {
                      valueIn += transactionValue
                  }
                  if (transfer.direction === 'in') {
                      valueOut += transactionValue
                  }
              }
      }})
      allTradedCoins[coinSymbol].valueIn += valueIn;
      allTradedCoins[coinSymbol].valueOut += valueOut;
    })
  
    const allTradedCoinsArray = Object.values(allTradedCoins);
      for (let singlePopulatedToken of allTradedCoinsArray) {
          //PUT ALL CALCULATIONS HERE PNL AND ETC
          let tokensLeft = singlePopulatedToken.quantityIn - singlePopulatedToken.quantityOut;
          let tokensLeftUSD = tokensLeft * singlePopulatedToken.valueOut / singlePopulatedToken.quantityOut
          let coinsPNL = singlePopulatedToken.valueOut - singlePopulatedToken.valueIn
          let coinsPNLpercentage = coinsPNL / singlePopulatedToken.valueIn * 100
  
  
          ////
          singlePopulatedToken.tokensLeft = tokensLeft;
          singlePopulatedToken.tokensLeftUSD = tokensLeftUSD
          singlePopulatedToken.coinsPNL = coinsPNL
          singlePopulatedToken.coinsPNLpercentage = coinsPNLpercentage
  
      }
      return {allTradedCoinsArray}
  });
  } catch (error) {
    console.error('Error fetching or processing wallet data:', error.message);
    throw error;
  }}


async function main() {
    const response = await processWalletDataMain("0x5da04eb0e28a06798797f54deb17cc014c525370")
    console.log(response)
}
main()