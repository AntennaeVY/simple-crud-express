const { createUser } = require("../../services/users/create.service");

module.exports.createUser = (req, res) => {
  try {
    createUser(req.body)
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
