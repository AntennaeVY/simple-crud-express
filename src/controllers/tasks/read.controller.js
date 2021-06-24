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
      return res.status(401).send("Must be admin to see all tasks");
    }

    getAllTasks()
      .then((allTasks) => {
        return res.status(200).send(allTasks);
      })
      .catch((err) => {
        return res.status(404).send(err.message);
      });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports.getAllOfUser = (req, res) => {
  try {
    const { userId } = req.params;

    if (!req.user.isAdmin && req.user._id != userId) {
      return res.status(401).send("Can't see another user's tasks");
    }

    getAllOfUser(userId)
      .then((tasks) => {
        return res.status(200).send(tasks);
      })
      .catch((err) => {
        return res.status(400).send(err.message);
      });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports.getOneById = (req, res) => {
  try {
    const { id } = req.params;

    getOneById(id)
      .then((task) => {
        if (!task) {
          return res.status(400).send("That task doesn't exists");
        }

        if (task._userId != req.user._id) {
          return res.status(401).send("Can't see that task, is not yours");
        }

        return res.status(200).send(task);
      })
      .catch((err) => {
        return res.status(404).send(err.message);
      });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports.getOneOfUserByTitle = (req, res) => {
  try {
    getOneOfUserByTitle(req.body.title, req.user._id)
      .then((task) => {
        if (!task) {
          return res.status(400).send("That task doesn't exists");
        }

        return res.status(200).send(task);
      })
      .catch((err) => {
        return res.status(400).send(err.message);
      });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports.getAllOfUserByStatus = (req, res) => {
  try {
    getAllOfUserByStatus(req.body.status, req.user._id)
      .then((tasks) => {
        return res.status(200).send(tasks);
      })
      .catch((err) => {
        return res.status(400).send(err.message);
      });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};
