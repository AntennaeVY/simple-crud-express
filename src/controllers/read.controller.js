const { getAll, getOneById } = require("../services/read.service.js");

module.exports.getAll = async (req, res) => {
  try {
    const allUsers = await getAll();

    return res.status(200).send(allUsers);
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports.getOneById = async (req, res) => {
  try {
    const user = await getOneById(req.params.id);

    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send(err);
  }
};
