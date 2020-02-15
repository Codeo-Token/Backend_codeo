const express = require("express");
const router = express.Router();

// Require the controllers
const newAccount = require("../controller/account.controller");

  

// create a new accounts
router.post("/newAccount/:_id",newAccount.new_account);

module.exports = router;
