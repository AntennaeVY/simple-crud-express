const { Router } = require("express");
const router = Router();

// Controllers
const { createTask } = require("../controllers/tasks/create.controller");
const {
  getAllTasks,
  getAllOfUser,
  getOneById,
  getOneOfUserByTitle,
  getAllOfUserByStatus,
} = require("../controllers/tasks/read.controller");
const { updateOneById } = require("../controllers/tasks/update.controller");
const { deleteOneById } = require("../controllers/tasks/delete.controller");

// Middlewares
const { isAuth } = require("../middlewares/auth.middleware");
const { isAdmin } = require("../middlewares/admin.middleware");

// Create
router.post("/tasks", isAuth, isAdmin, createTask);

// Read
router.get("/tasks", isAuth, isAdmin, getAllTasks);
router.get("/tasks/user/id/:userId", isAuth, isAdmin, getAllOfUser);
router.get("/tasks/id/:id", isAuth, isAdmin, getOneById);
router.post("/tasks/title/", isAuth, isAdmin, getOneOfUserByTitle);
router.post("/tasks/status", isAuth, isAdmin, getAllOfUserByStatus);

// Update
router.put("/tasks/id/:id", isAuth, isAdmin, updateOneById);

// Delete
router.delete("/tasks/id/:id", isAuth, isAdmin, deleteOneById);

module.exports = router;
