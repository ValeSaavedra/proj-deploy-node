var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  //res.render('index', { title: 'Express' });
  console.log("Probando primera vuelta");
  res.send("Probando");
});

module.exports = router;
