const User = require("../models/User");

const isUser = async (req, res) => {
  try {
    const { email } = req.params;
    //console.log(mail);
    const user = await User.findOne({ email });
    //console.log(user);
    if (!user) {
      res.send("No existe mail");
      return;
    }
    console.log(user.name);
    res.send(user.name);
  } catch (e) {
    res.sendStatus(500);
    console.error(e);
  }
};

module.exports = { isUser };
