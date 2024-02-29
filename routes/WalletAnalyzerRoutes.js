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
    console.log(processedData)
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
    console.log(processedData)
    res.json(processedData);
  } catch (error) {
    // Handle errors
    res.status(400).json({ error: error.message});
  }
})

router.post("/checkProStatus", walletController.checkProStatus)
router.post("/removeProStatusSol", walletController.removeProStatusSol)
router.post("/addProStatusSol", walletController.addProStatusSol)
router.post("/removeProStatusEth", walletController.removeProStatusEth)
router.post("/addProStatusEth", walletController.addProStatusEth)
// router.get("/listAllPros") 
// //--------------------
// //--------------------
router.post("/createUser", walletController.createUser);
router.post("/getUser", walletController.getUser);
router.post("/incrementUserCount", walletController.incrementUserCount)
module.exports = router;
