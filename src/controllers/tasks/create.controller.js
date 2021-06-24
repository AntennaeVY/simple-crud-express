const { createTask } = require("../../services/tasks/create.service");

module.exports.createTask = (req, res) => {
  try {
    const data = {
      ...req.body,
      _userId: req.user._id,
    };

    createTask(data)
      .then((task) => {
        return res.status(200).send(task);
      })
      .catch((err) => {
        return res.status(400).send(err.message);
      });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};
