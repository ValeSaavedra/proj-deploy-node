let express = require("express");
const { isUser } = require("../controllers");
let router = express.Router();

router.get("/:email", isUser);
/* GET home page. */
router.get("/", function (req, res, next) {
  //res.render('index', { title: 'Express' });
  console.log("Probando primera vuelta");
  res.send("Probando");
});

module.exports = router;
