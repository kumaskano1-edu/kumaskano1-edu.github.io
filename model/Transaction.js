// models/Transaction.js
class Transaction {
    constructor(hash, timestamp, from, to, value) {
      this.hash = hash;
      this.timestamp = timestamp;
      this.from = from;
      this.to = to;
      this.value = value;
    }
  }
  
  module.exports = Transaction;