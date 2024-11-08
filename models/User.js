const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
  },
  enable: {
    type: Boolean,
    default: false,
  },
  ts_create: {
    type: Date,
    default: Date.now,
  },
});
module.exports = model("users", UserSchema);
