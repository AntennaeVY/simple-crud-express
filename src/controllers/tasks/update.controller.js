const { updateOneById } = require("../../services/tasks/update.service");

module.exports.updateOneById = (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;

    updateOneById(id, update)
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
