const { updateOneById } = require("../../services/users/update.service");

module.exports.updateOneById = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;

    if (req.user._id != id && !req.isAdmin) {
      return res.status(401).send("Can't modify another user's info");
    }

    if (update.role && !req.isAdmin) {
      return res.status(401).send("Can't change your role");
    }

    updateOneById(id, update)
      .then((usr) => {
        return res.status(200).send(usr);
      })
      .catch((err) => {
        return res.status(400).send(err.message);
      });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};
