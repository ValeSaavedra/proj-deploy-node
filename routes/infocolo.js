const express = require("express");
const router = express.Router();
const { all, create } = require("../controllers/infocolo");

router.get("/", all);
router.post("/", create);

module.exports = router;
