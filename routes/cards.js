const express = require("express");
const router = express.Router();
const { create, all } = require("../controllers/cards");

router.post("/create", create);
router.get("/all", all);

module.exports = router;
