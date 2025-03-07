const Card = require("../models/Card");

const create = async (req, res) => {
  //const obj = req.body.name;
  //console.log(obj);
  try {
    const card = new Card(req.body);
    await card.save();
    res.status(201).json({ ok: true });
    //res.sendStatus(201);
    console.log(card);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const all = async (req, res) => {
  try {
    const cards = await Card.find();
    console.log(cards);
    res.status(200).json({ count: cards.length, cards });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};
module.exports = { create, all };
