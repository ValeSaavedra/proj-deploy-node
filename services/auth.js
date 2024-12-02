const jwt = require("jsonwebtoken");
const fs = require("fs");

const privateKey = fs.readFileSync("./keys/private.pem");
const publicKey = fs.readFileSync("./keys/public.pem");

//const signOptions = { expiresIn: "1h", algorithm: "RS256" };
const signOptions = {
  expiresIn: "1h",
  algorithm: "RS256",
  allowInsecureKeySizes: true,
};

const createToken = (payload) => jwt.sign(payload, privateKey, signOptions);
const decodeToken = (token) => jwt.verify(token, publicKey);

module.exports = { createToken, decodeToken };
