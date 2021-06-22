const { deleteOneById } = require("../../services/users/delete.service");

module.exports.deleteOneById = (req, res) => {
  try {
    const { id } = req.params;

    if (!req.isAdmin) {
      return res.status(401).send("Must be admin");
    }

    return deleteOneById(id)
      .then((usr) => {
        return res.status(200).send(usr);
      })
      .catch((err) => {
        return res.status(400).send(err);
      });
  } catch (err) {
    return res.status(500).send(err);
  }
};
