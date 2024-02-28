// routes/walletRoutes.js
const express = require('express');
const router = express.Router();
const walletController = require('../controller/WalletAnalyzerControllers'); 
// Route to handle processing Ethereum wallet data
router.post('/analyze', async (req, res) => {
  const walletAddress = req.body.walletAddress;
  try {
    // Process the wallet data using the controller
    const processedData = await walletController.processWalletDataMain(walletAddress);
    res.json(processedData);
  } catch (error) {
    // Handle errors
    res.status(400).json({ error: error.message});
  }
});

router.post('/analyze-solana', async (req, res) => {
  const walletAddress = req.body.walletAddress;
  try {
    // Process the wallet data using the controller
    const processedData = await walletController.processWalletDataSolana(walletAddress);
    res.json(processedData);
  } catch (error) {
    // Handle errors
    res.status(400).json({ error: error.message});
  }
})

router.post("/checkProStatus", walletController.checkProStatus)
router.post("/removeProStatus", walletController.removeProStatus)
router.post("/addProStatus", walletController.addProStatus)
// router.get("/listAllPros") 
// //--------------------
// //--------------------
router.post("/createUser", walletController.createUser);
router.post("/getUser", walletController.getUser);
router.post("/incrementUserCount", walletController.incrementUserCount)
module.exports = router;
