const { authenticateGoogleUser } = require("../../services/login/google.service");

module.exports.google = (req, res) => {
  if (!req.body.idtoken) {
    res.status(400).send("Token missing")
  }

  authenticateGoogleUser(req.body.idtoken)
    .then((token) => {
      return res.status(200).send(token)
    })
    .catch((err) => {
      return res.status(400).send(err)
    });
  
}