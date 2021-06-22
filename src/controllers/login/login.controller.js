const { login } = require("../../services/login/login.service");

module.exports.login = (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send("No email/password provided");
    }

    const { email, password } = req.body;

    login(email, password)
      .then((token) => {
        return res.status(200).send(token);
      })
      .catch((err) => {
        return res.status(400).send(err);
      });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};
