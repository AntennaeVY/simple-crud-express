const { Router } = require("express");
const router = Router();

const { login } = require("../controllers/login/login.controller");
const { google } = require("../controllers/login/google.controller");

router.post("/login", login);
router.post("/login/google", google)

module.exports = router;
