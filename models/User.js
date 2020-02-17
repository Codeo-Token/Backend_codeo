const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  account: [{ type: Schema.Types.ObjectId, ref: "Account" }],
  id_country: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
