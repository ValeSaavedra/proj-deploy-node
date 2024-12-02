/*
const User = require("../models/User");

const isUser = async (req, res) => {
  try {
    const { email } = req.params;
    //console.log(mail);
    //const user = await User.findOne({ email }, { email: 0, name: 1 });
    const user = await User.findOne({ email }, { _id: 0, name: 1 }); //.select( "name" );
    if (!user) {
      res.send("No existe mail");
      return;
    }
    console.log(`Acá mostramos user ${user}`);
    //console.log(user.name);
    res.send(user.name);
  } catch (e) {
    res.sendStatus(500);
    console.error(e);
  }
};

module.exports = { isUser };
*/
