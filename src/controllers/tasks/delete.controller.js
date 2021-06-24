const { getOneById } = require("../../services/tasks/read.service");
const { deleteOneById } = require("../../services/tasks/delete.service");

module.exports.deleteOneById = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await getOneById(id);

    if (!task) {
      return res.status(400).send("That task doesn't exists");
    }

    if (!req.isAdmin && task._userId != req.user._id) {
      return res.status(401).send("Can't delete another user's tasks");
    }

    deleteOneById(id)
      .then((deleted) => {
        return res.status(200).send(deleted);
      })
      .catch((err) => {
        return res.status(400).send(err.message);
      });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};
