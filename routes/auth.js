const express = require("express");
const router = express.Router();
const { create, auth } = require("../controllers/auth");

router.post("/login", auth);
router.post("/", create);

module.exports = router;
