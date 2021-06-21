const {
  getAll,
  getOneById,
  getOneByEmail,
} = require("../../services/users/read.service.js");

module.exports.getAll = (req, res) => {
  try {
    return getAll()
      .then((allUsers) => {
        return res.status(200).send(allUsers);
      })
      .catch((err) => {
        return res.status(404).send(err);
      });
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports.getOneById = (req, res) => {
  try {
    const { id } = req.params;

    return getOneById(id)
      .then((usr) => {
        return res.status(200).send(usr);
      })
      .catch((err) => {
        return res.status(404).send(err);
      });
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports.getOneByEmail = (req, res) => {
  try {
    if (!req.body.email) {
      return res.status(400).send("No email provided");
    }

    const { email } = req.body;

    return getOneByEmail(email)
      .then((usr) => {
        return res.status(200).send(usr);
      })
      .catch((err) => {
        return res.status(404).send(err);
      });
  } catch (err) {
    return res.status(500).send(err);
  }
};
