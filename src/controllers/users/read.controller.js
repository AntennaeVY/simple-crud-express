const {
  getAllUsers,
  getOneById,
  getOneByEmail,
} = require("../../services/users/read.service.js");

module.exports.getAllUsers = (req, res) => {
  try {
    getAllUsers()
      .then((allUsers) => {
        return res.status(200).send(allUsers);
      })
      .catch((err) => {
        return res.status(404).send(err.message);
      });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports.getOneById = (req, res) => {
  try {
    const { id } = req.params;

    getOneById(id)
      .then((usr) => {
        return res.status(200).send(usr);
      })
      .catch((err) => {
        console.log(err.message);
        return res.status(404).send(err.message);
      });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports.getOneByEmail = (req, res) => {
  try {
    getOneByEmail(req.body.email)
      .then((usr) => {
        return res.status(200).send(usr);
      })
      .catch((err) => {
        return res.status(400).send(err.message);
      });
  } catch (err) {
    return res.status(500).send(err.message.message);
  }
};
