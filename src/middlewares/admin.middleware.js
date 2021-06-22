module.exports.isAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send("Must be logged in");
  }

  if (req.user.role != "ADMIN_ROLE") {
    req.isAdmin = false;
  } else {
    req.isAdmin = true;
  }

  
  next();
};
