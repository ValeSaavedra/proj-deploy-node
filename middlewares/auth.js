const { decodeToken } = require("../services/auth");

const securedUser = (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const { _id, name } = decodeToken(token);
    req._id = _id;
    req.name = name;
    console.log(
      `la info que tenía el token era el _id ${req._id} y el name ${req.name}`
    );
    next();
  } catch (e) {
    console.error(e);
    res.status(401).json({ message: "Usuario no autorizado" });
  }
};

module.exports = { securedUser };
