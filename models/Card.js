const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  name: String,
  issuingBank: String,
  expireInMonth: Number,
  expireInYear: Number,
});

module.exports = model("cards", UserSchema);
