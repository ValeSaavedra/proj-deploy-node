const jwt = require("jsonwebtoken");
const fs = require("fs");
/*
process.env.WHE === "DEV"  
? let privateKey = fs.readFileSync("./keys/private.pem") 
: let privateKey = fs.readFileSync("/etc/secrets/private.pem");
*/
const privateKey = fs.readFileSync("./private.pem");
const publicKey = fs.readFileSync("./keys/public.pem");
/*
if (process.env.WHE === "DEV") {
  let privateKey = fs.readFileSync("./keys/private.pem");
} else {
  let privateKey = fs.readFileSync("/etc/secrets/private.pem");
}
  */

//const signOptions = { expiresIn: "1h", algorithm: "RS256" };
const signOptions = {
  expiresIn: "1h",
  algorithm: "RS256",
  allowInsecureKeySizes: true,
};

const createToken = (payload) => jwt.sign(payload, privateKey, signOptions);
const decodeToken = (token) => jwt.verify(token, publicKey);

module.exports = { createToken, decodeToken };
