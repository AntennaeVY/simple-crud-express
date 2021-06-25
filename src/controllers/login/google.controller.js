const {
  authenticateGoogleUser,
} = require("../../services/login/google.service");

module.exports.google = (req, res) => {
  try {
    if (!req.body.idtoken) {
      res.status(400).json({ success: false, response: "Token missing" });
    }

    authenticateGoogleUser(req.body.idtoken)
      .then((token) => {
        return res.status(200).json({ success: true, message: token });
      })
      .catch((err) => {
        return res.status(400).json({ success: false, response: err.message });
      });
  } catch (err) {
    return res.status(500).json({ success: false, response: err.message });
  }
};
