const { createUser } = require("../../services/users/create.service");

module.exports.createUser = (req, res) => {
  try {
    createUser(req.body)
      .then((usr) => {
        return res.status(200).json({ success: true, response: usr });
      })
      .catch((err) => {
        return res.status(400).json({ success: false, response: err.message });
      });
  } catch (err) {
    return res.status(500).json({ success: false, response: err.message });
  }
};
