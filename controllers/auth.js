const User = require("../models/User");
const { createToken } = require("../services/auth");
const { hash, unhash } = require("../utils/bcrypt");

const auth = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }, { password: 1, name: 1 });
    const isValidPass = unhash(password, user.password);
    if (!isValidPass)
      return res
        .status(401)
        .json({ message: "Usuario o contraseña incorrecto/a" });
    console.log(user);
    const jwtObject = {
      _id: user._id,
      name: user.name,
    };
    const JWT = createToken(jwtObject);
    console.log(
      `el jwtObject viene con el id ${jwtObject._id} y el name ${jwtObject.name}`
    );
    console.log(`el JWT entero es ${JWT}`);
    res.cookie("jwt", JWT);
    res.json({ message: `Bienvenido/a ${user.name}` });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const create = async (req, res) => {
  try {
    console.log("estoy empezando create");
    const { email, password } = req.body;
    console.log(email);
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "El mail esté en uso" });
    console.log(password);
    //res.end();

    user = new User(req.body);
    user.password = hash(password);
    await user.save();
    res.sendStatus(201);
    console.log(user);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

module.exports = { create, auth };
