const { createUser } = require("../services/create.service");

module.exports.createUser = async (req, res) => {
  try {
    const newUser = await createUser(req.body);

    return res.status(200).send(newUser);
  } catch (err) {
    return res.status(500).send(err);
  }
};
