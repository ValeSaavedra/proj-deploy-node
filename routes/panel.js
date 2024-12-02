const express = require("express");
const router = express.Router();
const { voyAPanel } = require("../controllers/panel");
const { securedUser } = require("../middlewares/auth");

router.get("/", securedUser, voyAPanel);

module.exports = router;
