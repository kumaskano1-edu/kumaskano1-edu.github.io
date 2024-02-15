// server.js
const express = require('express');
const bodyParser = require('body-parser');
const walletRoutes = require('./routes/WalletAnalyzerRoutes');
const axios = require("axios")
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Use walletRoutes for handling wallet-related routes
app.use('/wallet', walletRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


//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