const {
  getAllTasks,
  getAllOfUser,
  getOneById,
  getOneOfUserByTitle,
  getAllOfUserByStatus,
} = require("../../services/tasks/read.service");

module.exports.getAllTasks = (req, res) => {
  try {
    if (!req.isAdmin) {
      return res
        .status(401)
        .json({ success: false, response: "Must be admin to see all tasks" });
    }

    getAllTasks()
      .then((allTasks) => {
        return res.status(200).json({ success: true, response: allTasks });
      })
      .catch((err) => {
        return res.status(404).json({ success: false, response: err.message });
      });
  } catch (err) {
    return res.status(500).json({ success: false, response: err.message });
  }
};

module.exports.getAllOfUser = (req, res) => {
  try {
    const { userId } = req.params;

    if (!req.user.isAdmin && req.user._id != userId) {
      return res
        .status(401)
        .json({ success: false, response: "Can't see another user's tasks" });
    }

    getAllOfUser(userId)
      .then((tasks) => {
        return res.status(200).json({ success: true, response: tasks });
      })
      .catch((err) => {
        return res.status(400).json({ success: false, response: err.message });
      });
  } catch (err) {
    return res.status(500).json({ success: false, response: err.message });
  }
};

module.exports.getOneById = (req, res) => {
  try {
    const { id } = req.params;

    getOneById(id)
      .then((task) => {
        if (!task) {
          return res
            .status(400)
            .json({ success: false, response: "That task doesn't exists" });
        }

        if (task._userId != req.user._id) {
          return res.status(401).json({
            success: false,
            message: "Can't see that task, is not yours",
          });
        }

        return res.status(200).json({ success: true, response: task });
      })
      .catch((err) => {
        return res.status(404).json({ success: false, response: err.message });
      });
  } catch (err) {
    return res.status(500).json({ success: false, response: err.message });
  }
};

module.exports.getOneOfUserByTitle = (req, res) => {
  try {
    getOneOfUserByTitle(req.body.title, req.user._id)
      .then((task) => {
        if (!task) {
          return res
            .status(400)
            .json({ success: false, response: "That task doesn't exists" });
        }

        return res.status(200).json({ success: true, response: task });
      })
      .catch((err) => {
        return res.status(400).json({ success: false, response: err.message });
      });
  } catch (err) {
    return res.status(500).json({ success: false, response: err.message });
  }
};

module.exports.getAllOfUserByStatus = (req, res) => {
  try {
    getAllOfUserByStatus(req.body.status, req.user._id)
      .then((tasks) => {
        return res.status(200).json({ success: false, response: tasks });
      })
      .catch((err) => {
        return res.status(400).json({ success: false, response: err.message });
      });
  } catch (err) {
    return res.status(500).json({ success: false, response: err.message });
  }
};
