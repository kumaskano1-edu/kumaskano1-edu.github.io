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
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
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
    let unsortedData = await response.data.result.data 
    let sortedData = [];
    unsortedData.forEach((transaction) => {
      if (transaction.err == null && transaction.memo == null) {
        sortedData.push(transaction)
      }
    })
    responseJson = await computeAnalytics(sortedData)
    return responseJson
  } catch(error) {
    throw new Error(error.message)
  }
}
async function computeAnalytics(transactions) {
  let processedTransactions = []
  try {
    let response = await fetchDetailsForAllTransactions(transactions);
    response.forEach(async (transaction) => {
      if(transaction.tokenAdress) {
        processedTransactions.push(transaction)
      }
    })
  }catch(error) {
    throw new Error(error.message)
  }
  // //use API to get symbol and coin Name 
  if(processedTransactions.length <= 0) {
    throw new Error("No Transactions in last 7 days")
  }
  return processedTransactions
}
//GETs an array of transactions with their pnls
async function fetchDetailsForAllTransactions(transactions) {
  let transactionsArray = []
  for (const transaction of transactions) {
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
      let differenceInSolana = 0;
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
          dateInMiliseconds: dateInMiliseconds,
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
async function fetchTransactionDetails(signature) {
  const solana = new Connection("https://icy-rough-wildflower.solana-mainnet.quiknode.pro/93b3e383ff9d35fc3fe7c86419d5caca586aced3/");
  try {
    const transactionDetails = await solana.getTransaction(signature, { maxSupportedTransactionVersion: 0 });
    return transactionDetails
  } catch (error) {
    throw new Error(error.message)
  }
}

//function to compute and make analytics 

/* ADMIN CONTROLLERS  */
async function createUser(req, res) {
  try {
    // Create a new user document
    const userData = {
      telegramId: req.body.telegramId,
      proMemberSol: false,
      proMemberEth: false,
      datetimeEth: "",
      datetimeSol: "",
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
async function addProStatusSol(req, res) {
  try {
    const date = new Date();
    const dateString = date.toISOString();
    const telegramId = req.body.telegramId;
    const user = await User.findOne({ telegramId: telegramId });
    // If user is not found, return 404 status
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    user.proMemberSol = true;
    user.datetimeSol = dateString
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    console.error('Error adding pro status:', error);
    res.status(500).json({ error: 'Error adding pro status' });
  }
};
async function addProStatusEth(req, res) {
  try {
    const telegramId = req.body.telegramId;
    const date = new Date();
    const dateString = date.toISOString();
    const user = await User.findOne({ telegramId: telegramId });
    // If user is not found, return 404 status
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    user.proMemberEth = true;
    user.datetimeEth = dateString
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    console.error('Error adding pro status:', error);
    res.status(500).json({ error: 'Error adding pro status' });
  }
};
async function removeProStatusSol(req, res) {
  try {
    const telegramId = req.body.telegramId;
    const user = await User.findOne({ telegramId });
    // If user is not found, return 404 status
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    user.proMemberSol = false;
    user.datetimeSol = ""
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    console.error('Error adding pro status:', error);
    res.status(500).json({ error: 'Error adding pro status' });
  }
};
async function removeProStatusEth(req, res) {
  try {
    const telegramId = req.body.telegramId;
    const user = await User.findOne({ telegramId });
    // If user is not found, return 404 status
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    user.proMemberEth = false;
    user.datetimeEth = ""
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    console.error('Error adding pro status:', error);
    res.status(500).json({ error: 'Error adding pro status' });
  }
};
async function checkProStatusEth(req, res) {
  try {
    const { telegramId } = req.body.telegramId;
    const user = await User.findOne({ telegramId });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ proMemberEth: user.proMemberEth });
  } catch (error) {
    console.error('Error checking pro status:', error);
    res.status(500).json({ error: 'Error checking pro status' });
  }
}
async function checkProStatusSol(req, res) {
  try {
    const { telegramId } = req.body.telegramId;
    const user = await User.findOne({ telegramId });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ proMemberSol: user.proMemberSol });
  } catch (error) {
    console.error('Error checking pro status:', error);
    res.status(500).json({ error: 'Error checking pro status' });
  }
}
async function listProsEth(req, res) {
  let listOfPros = []
  try {
    const users = await User.find({});
    users.forEach((user) => {
      if(user.proMemberEth == true) {
        listOfPros.push(user)
      }
    })
    res.status(200).json(listofPros)
  }catch(error) {
    console.error('Error checking pro status:', error);
    res.status(500).json({ error: 'Error checking pro status' });
  }
}
async function listProsSol(req, res) {
  let listOfPros = []
  try {
    const users = await User.find({});
    users.forEach((user) => {
      if(user.proMemberSol == true) {
        listOfPros.push(user)
      }
    })
    res.status(200).json(listofPros)
  }catch(error) {
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
  addProStatusSol,
  removeProStatusSol,
  removeProStatusEth,
  addProStatusEth,
  listProsEth,
  listProsSol
};
