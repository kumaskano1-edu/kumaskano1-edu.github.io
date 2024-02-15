// models/TokenAttributes.js
class TokenAttributes {
    constructor(
      symbol,
      name,
      coinsIn,
      coinsOut,
      commission,
      coinsLeft,
      unrealizedGain,
      coinsInValue,
      coinsOutValue,
      profit,
      profitPercentage,
      totalInTransactionsNum,
      totalOutTransactionsNum,
      lastTransactionDate,
      lastPrice,
      transactions,
    ) {
      this.symbol = symbol;
      this.name = name;
      this.coinsIn = coinsIn;
      this.coinsOut = coinsOut;
      this.commission = commission;
      this.coinsLeft = coinsLeft;
      this.unrealizedGain = unrealizedGain;
      this.coinsInValue = coinsInValue;
      this.coinsOutValue = coinsOutValue;
      this.profit = profit;
      this.profitPercentage = profitPercentage;
      this.totalInTransactionsNum = totalInTransactionsNum;
      this.totalOutTransactionsNum = totalOutTransactionsNum;
      this.lastTransactionDate = lastTransactionDate;
      this.lastPrice = lastPrice,
      this.transactions = transactions

    }
  }

  module.exports = TokenAttributes;
  