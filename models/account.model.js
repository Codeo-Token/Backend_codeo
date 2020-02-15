const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this is our schema file for the mongodb

let AccountSchema = new Schema({
  ETH: {
    type: String,
    required: false,
    max: 64
  },
  key: {
    type: Map,
    require: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Export the model

const account = mongoose.model("Account", AccountSchema);

module.exports = account;
