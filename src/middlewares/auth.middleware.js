const { verifyToken, decodeToken } = require("../utils/token");

module.exports.isAuth = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(400).send("No token provided in headers, please log in");
  }

  verifyToken(token)
    .then(() => {
      req.user = decodeToken(token);
      next();
    })
    .catch((err) => {
      return res
        .status(401)
        .send("Token invalid or expired. Must be logged in");
    });
};
