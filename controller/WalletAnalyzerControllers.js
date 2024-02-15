// controllers/walletController.js
const axios = require('axios');
require('dotenv').config();
const mongoose = require('mongoose');
const User = require("../model/User")
const uri = process.env.URL_DB;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    })
  .catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err);
});

async function processWalletDataMain(walletAddress) {
  let responseJson = {};
  try {
    if (!walletAddress) {
      throw new Error('Wallet address is required.');
    }
    let today = new Date();
    today.setMonth(today.getMonth() - 1);
    if (today.getMonth() === 11) {
        today.setFullYear(today.getFullYear() - 1);
    }
    let millisecondsSinceEpoch = today.getTime();
    let millisecondsString = millisecondsSinceEpoch.toString();
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
  createUser,
  getUser,
  incrementUserCount, 
  addProStatus,
  removeProStatus,
  checkProStatus
};
