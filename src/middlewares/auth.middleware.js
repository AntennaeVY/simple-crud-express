const { verifyToken, decodeToken } = require("../utils/token");

module.exports.isAuth = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).send("No token provided");
  }

  verifyToken(token)
    .then(() => {
      req.user = decodeToken(token);
      next();
    })
    .catch((err) => {
      res.status(401).send("Token invalid or expired. Must be logged in");
    });
};
