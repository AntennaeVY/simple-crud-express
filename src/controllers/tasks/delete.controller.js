const { getOneById } = require("../../services/tasks/read.service");
const { deleteOneById } = require("../../services/tasks/delete.service");

module.exports.deleteOneById = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await getOneById(id);

    if (!task) {
      return res
        .status(400)
        .json({ success: false, response: "That task doesn't exists" });
    }

    if (!req.isAdmin && task._userId != req.user._id) {
      return res
        .status(401)
        .json({
          success: false,
          response: "Can't delete another user's tasks",
        });
    }

    deleteOneById(id)
      .then((deleted) => {
        return res.status(200).json({ success: false, response: deleted });
      })
      .catch((err) => {
        return res.status(400).json({ success: false, response: err.message });
      });
  } catch (err) {
    return res.status(500).json({ success: false, response: err.message });
  }
};
