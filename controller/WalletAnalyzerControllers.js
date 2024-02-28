// controllers/walletController.js
const axios = require('axios');
require('dotenv').config();
const mongoose = require('mongoose');
const https = require('https');
const User = require("../model/User")
let web3 = require('web3')
const util = require('util');

const { Connection, PublicKey } = require('@solana/web3.js');

const uri = process.env.URL_DB;
const { programs } = require('@metaplex/js');
const { Metadata } = programs.metadata;
let today = new Date();
    today.setMonth(today.getMonth() - 1);
    if (today.getMonth() === 11) {
        today.setFullYear(today.getFullYear() - 1);
    }
let millisecondsSinceEpoch = today.getTime();
let millisecondsString = millisecondsSinceEpoch.toString();
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    })
  .catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err);
});
/* ETH CONTROLLER */
async function processWalletDataMain(walletAddress) {
  let responseJson = {};
  try {
    if (!walletAddress) {
      throw new Error('Wallet address is required.');
    }
    let options = {
      method: 'GET',
      url: `https://api.zerion.io/v1/wallets/${walletAddress}/transactions/`,
      params: {
        currency: 'usd',
        'page[size]': '100',
        'filter[operation_types]': 'trade',
        'filter[asset_types]': 'fungible',
        'filter[min_mined_at]': `${millisecondsString}`,
        'filter[trash]': 'only_non_trash'
      },
      headers: {
        accept: 'application/json',
        authorization: 'Basic emtfZGV2X2ZiMGIyMTIxOWRkYjQ5MGQ5MzUyMTkxNTI2ZmQyNDk5Og=='
      }
    };

    return axios
    .request(options)
    .then(function(response) {
        let walletData = response.data;
        if (!walletData) {
            throw new Error('No trade transactions found for this wallet in the past 30 days');
        } 
        let allTradedCoins = {};
        walletData.data.forEach(transaction => {
          let singleCoin = {
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
        const fee = transaction.attributes.fee.value
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
      allTradedCoins[coinSymbol].comission = fee
    })

    const allTradedCoinsArray = Object.values(allTradedCoins);
      for (let singlePopulatedToken of allTradedCoinsArray) {
          let tokensLeft = singlePopulatedToken.quantityIn - singlePopulatedToken.quantityOut;
          let tokensLeftUSD = tokensLeft * singlePopulatedToken.valueOut / singlePopulatedToken.quantityOut
          let coinsPNL = (singlePopulatedToken.valueOut + tokensLeftUSD) - (singlePopulatedToken.valueIn + singlePopulatedToken.comission);
          let coinsPNLpercentage = coinsPNL / singlePopulatedToken.valueIn * 100


          singlePopulatedToken.tokensLeft = tokensLeft;
          singlePopulatedToken.tokensLeftUSD = tokensLeftUSD
          singlePopulatedToken.pnl = coinsPNL
          singlePopulatedToken.pnlPercentage = coinsPNLpercentage

      }

      let totalPnl = 0;
      let totalValueIn = 0;
      allTradedCoinsArray.forEach(coin => {
        if(coin.symbol != "ETH" || coin.symbol != "USDT") {
          if (coin.tokensLeft >= 0 && coin.tokensLeftUSD >= 0) {
            totalPnl += coin.pnl;
            totalValueIn += coin.valueIn;
          }
        }
      });
  let totalPnlPercentage = (totalPnl / totalValueIn) * 100;
      responseJson = {
        "wallet_address": `${walletAddress}`,
        "total_value_in": `${totalValueIn}`,
        "pnl_total": `${totalPnl}`,
        "pnl_percentage": `${totalPnlPercentage}%`, 
        "coins": allTradedCoinsArray
    }
      return responseJson;
    })
    .catch(function(error) {
      throw new Error(error.message)
    });
} catch (error) {
  console.error('Error fetching or processing wallet data:', error.message);
  throw error; 
}}
/* SOLANA CONTROLLER */
async function processWalletDataSolana(walletAdress) {
  let responseJson = {};
  if(!walletAdress) {
    throw new Error("No Wallet Here")
  }
  const currentDate = new Date();
  let currentEpochSeconds = Math.floor(currentDate.getTime() / 1000);
  let sevenDaysAgoEpochSeconds = currentEpochSeconds - (7 * 24 * 60 * 60);
  const url = `https://api.solana.fm/v0/accounts/${walletAdress}/transactions?utcFrom=${sevenDaysAgoEpochSeconds}&utcTo=${currentEpochSeconds}&page=1`
  try {
    let response = await axios.get(url);
    responseJson = await computeAnalytics(response.data)
    return responseJson
  } catch(error) {
    throw new Error(error.message)
  }
}
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function fetchTransactionDetails(signature) {
  const solana = new Connection("https://docs-demo.solana-mainnet.quiknode.pro/");
  try {
    const transactionDetails = await solana.getTransaction(signature, { maxSupportedTransactionVersion: 0 });
    return transactionDetails
  } catch (error) {
    throw new Error(error.message)
  }
}
//GETs an array of transactions with their pnls
async function fetchDetailsForAllTransactions(transactions) {
  let transactionsArray = []
  for (const transaction of transactions.result.data) {
      const signature = transaction.signature; // Assuming the signature is stored here
      let details = {}
      try {
        details = await fetchTransactionDetails(signature);
      } catch(error) {
        throw new Error(error.message)
      }
      let postBalanceSolana = 0;
      let preBalanceSolana = 0;
      let preBalanceToken = 0;
      let postBalanceToken = 0;
      let tokenAdress = "";
      let comission = 0;
      let difference = 0;
      let dateInMiliseconds = 0;
      if(details) {
        dateInMiliseconds = details.blockTime
           postBalanceSolana = details.meta.postBalances[0]
           preBalanceSolana = details.meta.preBalances[0]
           if(details.meta.postTokenBalances.length > 0) {
              postBalanceToken = details.meta.postTokenBalances[0].uiTokenAmount.amount
              tokenAdress = details.meta.postTokenBalances[0].mint
           }
           if(details.meta.preTokenBalances.length > 0) {
            preBalanceToken = details.meta.preTokenBalances[0].uiTokenAmount.amount
           }
           comission = details.meta.fee
           differenceInSolana = postBalanceSolana - preBalanceSolana
      }
      let transactionObject = {
          name: '',
          symbol: '',
          signature: signature,
          postBalanceSolana: postBalanceSolana,
          preBalanceSolana: preBalanceSolana,
          preBalanceToken:  parseFloat(preBalanceToken),
          postBalanceToken: parseFloat(postBalanceToken),
          differenceInSolana: differenceInSolana,
          comission: comission,
          tokenAdress: tokenAdress
      }
      transactionsArray.push(transactionObject)
      await delay(150);
  }
  return transactionsArray
}
const getMetadataforCoin = async (mint) => {
  if(mint === "") {
    return ["Unknown Coin", "Unknown Symbol"]
  }
  const connection = new Connection('https://api.mainnet-beta.solana.com');
  const mintPublicKey = new PublicKey(mint);
  let array = []
  const pda = await Metadata.getPDA(mintPublicKey);
  const metadata = await Metadata.load(connection, pda);

  let name = metadata.data.data.name;
  let symbol = metadata.data.data.symbol
  if(!name) {
      array[0] = 'Unknown Coin'
  }
  if(!symbol) {
      array[1] = "Unknown Symbol"
  }
  return [name, symbol]
};
//function to compute and make analytics 
async function computeAnalytics(transactions) {
  let processedTransactions = []
  try {
    processedTransactions = await fetchDetailsForAllTransactions(transactions);
  }catch(error) {
    throw new Error(error.message)
  }
  // //use API to get symbol and coin Name 
  if(processedTransactions.length <= 0) {
    throw new Error("No Transactions in last 7 days")
  }
  // processedTransactions.forEach(async (transaction) => {
  // //     //check if the adress is in the map, if not set an adress as new {}
  //      if(!analytics.has(transaction.tokenAdress)) {
  //          analytics.set(transaction.tokenAdress, {
  //              name: '',
  //              symbol: '',
  //              profitableTrades: 0,
  //              lossTrades: 0,
  //              pnlForCoin: 0,
  //              tokensIn: 0,
  //              tokensOut: 0,
  //             tokensLeft: 0,
  //              comission: 0
  //          })
  //      }
  //      let tokenObjectFromMap = analytics.get(transaction.tokenAdress);
  //      // //Calculated profitable and loss trades as well as the total PNL for coin 
  //      let differenceInSolana = (transaction.postBalanceSolana - transaction.preBalanceSolana) / 1000000000; 
  //     if(differenceInSolana >= 0) {
  //         tokenObjectFromMap.profitableTrades += differenceInSolana 
  //     } else {
  //         tokenObjectFromMap.lossTrades -= differenceInSolana
  //     }
  //      tokenObjectFromMap.pnlForCoin += differenceInSolana;
  //      //Calculated TokensIn and TokensOut as well as TotalTokensLeft
  //      let differenceInToken = transaction.postBalanceToken - transaction.preBalanceToken;
  //      if(differenceInToken >= 0) {
  //          tokenObjectFromMap.tokensIn += differenceInToken
  //      } else {
  //         tokenObjectFromMap.tokensOut -= differenceInToken
  //     }
  //     tokenObjectFromMap.tokensLeft += differenceInToken
  //     //calculate comission 
  //     tokenObjectFromMap.comission += (transaction.comission) / 1000000000
  // })
  // //finding names and symbols of each coin
  // for (let [key, object] of analytics.entries()) {
  //     let newObject = object; 
  //     try{
  //         let metaData = await getMetadataforCoin(key)
  //         newObject.name = metaData[0];
  //         newObject.symbol = metaData[1];
  //         analytics.set(key, newObject)
  //     }catch(error) {
  //       throw new Error(error.message)
  //     }
  // }
  
  return processedTransactions
}
/* ADMIN CONTROLLERS  */
async function createUser(req, res) {
  try {
    // Create a new user document
    const userData = {
      telegramId: req.body.telegramId,
      proMember: false,
      triesCount: 0
    };
    const newUser = new User(userData);

    // Save the user to the database
    const savedUser = await newUser.save();

    console.log('User created successfully:', savedUser);
    res.status(200).json(savedUser)
  } catch (error) {
    res.status(400).json({ error: error.message});
  }
}
async function getUser(req, res) {
  try{ 
  const telegramId = req.body.telegramId
  const user = await User.findOne({ telegramId });
  if (!user) {
    return res.status(404).json({ error: 'User not found', status: 404 });
  }
    return res.status(200).json(user);
  } catch(error) {
    res.status(500).json({ error: 'Error retrieving user by Telegram ID' });
  }
}
async function incrementUserCount(req, res) {
  try {
    const telegramId = req.body.telegramId
    const user = await User.findOne({telegramId});
    if (!user) {
      return res.status(404).json({error: "user not found"});
    }
    user.triesCount += 1;
    await user.save();

    res.status(200).json({message: "incremented"})
  } catch (error) {
    console.error('Error incrementing tries count:', error);
    res.status(400).json({ error: error.message});
    return
  }
};  
async function addProStatus(req, res) {
  try {
    const telegramId = req.body.telegramId;
    const user = await User.findOne({ telegramId: telegramId });
    // If user is not found, return 404 status
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    user.proMember = true;
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    console.error('Error adding pro status:', error);
    res.status(500).json({ error: 'Error adding pro status' });
  }
};
async function removeProStatus(req, res) {
  try {
    const telegramId = req.body.telegramId;
    const user = await User.findOne({ telegramId });
    // If user is not found, return 404 status
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    user.proMember = false;
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    console.error('Error adding pro status:', error);
    res.status(500).json({ error: 'Error adding pro status' });
  }
};
async function checkProStatus(req, res) {
  try {
    const { telegramId } = req.body.telegramId;
    const user = await User.findOne({ telegramId });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ proMember: user.proMember });
  } catch (error) {
    console.error('Error checking pro status:', error);
    res.status(500).json({ error: 'Error checking pro status' });
  }
}
module.exports = {
  processWalletDataMain,
  processWalletDataSolana,
  createUser,
  getUser,
  incrementUserCount, 
  addProStatus,
  removeProStatus,
  checkProStatus
};
