const User = require("../models/user.model");

module.exports.createUser = async (data) => {
  return await User.create(data);
};
