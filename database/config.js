const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT);
    console.log("Conectado a la DB de MongoAtlas");
  } catch (e) {
    console.error(e);
  }
};

module.exports = { dbConnection };
