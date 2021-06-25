const { updateOneById } = require("../../services/tasks/update.service");

module.exports.updateOneById = (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;

    updateOneById(id, update)
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
