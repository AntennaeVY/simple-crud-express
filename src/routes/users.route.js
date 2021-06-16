const { Router } = require("express");
const router = Router();

const { createUser } = require("../controllers/create.controller");
const { getAll, getOneById } = require("../controllers/read.controller");
const { updateOneById } = require("../controllers/update.controller");
const { deleteOneById } = require("../controllers/delete.controller");

router.post("/users", createUser);
router.get("/users", getAll);
router.get("/users/id/:id", getOneById);
router.put("/users/id/:id", updateOneById);
router.delete("/users/id/:id", deleteOneById);

module.exports = router;
