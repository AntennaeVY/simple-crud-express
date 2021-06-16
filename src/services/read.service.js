const User = require("../models/user.model");

module.exports.getAll = async () => {
  return await User.find({});
};

module.exports.getOneById = async (id) => {
  return await User.findById(id);
};
