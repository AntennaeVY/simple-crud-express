const { Router } = require("express");
const router = Router();

const { login } = require("../controllers/login/login.controller");

router.post("/login", login);

module.exports = router;
