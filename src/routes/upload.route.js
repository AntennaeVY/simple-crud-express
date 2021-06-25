const { Router } = require("express");
const router = Router();

const { upload } = require("../controllers/upload/upload.controller");
const { isAuth } = require("../middlewares/auth.middleware");

router.post("/upload", isAuth, upload);

module.exports = router;
