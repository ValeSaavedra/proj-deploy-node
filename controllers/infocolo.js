const TotColonia = require("../models/TotColonia");

const all = async (req, res) => {
  try {
    const totColonia = await TotColonia.find();
    console.log(totColonia);
    res.status(200).json({ count: totColonia.length, totColonia });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};
const create = async (req, res) => {
  try {
    const totColonia = new TotColonia(req.body);
    await totColonia.save();
    res.sendStatus(201);
    console.log(totColonia);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

module.exports = { all, create };
