const { getAll, getOneById } = require("../services/read.service.js");

module.exports.getAll = (req, res) => {
  try {
    return getAll()
      .then((allUsers) => {
        return res.status(200).send(allUsers);
      })
      .catch((err) => {
        return res.status(401).send(err);
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
        return res.status(401).send(err);
      });
  } catch (err) {
    return res.status(500).send(err);
  }
};
