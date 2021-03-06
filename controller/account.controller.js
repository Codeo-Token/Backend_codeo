const ethereum_controller = require("./ethereum.controller");
const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA));

const Account = require("../models/account.model.js");
const User = require("../models/User");


module.exports = {
  new_account: async (req, res) => {
    let ethData;
    let newAccount = new Account({
      ETH: req.body.ETH,
      key: req.body.key
    });

    // await new ETH walletAddress
    ethData = await ethereum_controller.get_new_address();
    newAccount.ETH = ethData[0];
    newAccount.key = web3.eth.accounts.encrypt(ethData[1], process.env.ENCRYPT);

    //save account object to the database
    const eth = await newAccount.save()
    const user = await User.findOneAndUpdate(
      { _id: req.params._id },
      { $push: { account: eth._id} },
      { new: true }
    );
    try {
      res.status(200).send({
        massage: "Created new account",
        eth,
        user
      });
    } catch (error) {
      res.status(400).send({
        massage: `failed to created new account`,
        error
      });
    }
  }
};
