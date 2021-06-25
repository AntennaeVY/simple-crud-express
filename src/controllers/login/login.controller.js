const { login } = require("../../services/login/login.service");

module.exports.login = (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res
        .status(400)
        .json({ success: false, message: "No email/password provided" });
    }

    const { email, password } = req.body;

    login(email, password)
      .then((token) => {
        return res.status(200).json({ success: true, response: token });
      })
      .catch((err) => {
        return res.status(400).json({ success: false, response: err.message });
      });
  } catch (err) {
    return res.status(500).json({ success: false, response: err.message });
  }
};
