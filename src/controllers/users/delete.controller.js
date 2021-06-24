const { deleteOneById } = require("../../services/users/delete.service");

module.exports.deleteOneById = (req, res) => {
  try {
    const { id } = req.params;

    if (!req.isAdmin && req.user._id != id) {
      return res.status(401).send("Can't delete another user");
    }

    deleteOneById(id)
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
