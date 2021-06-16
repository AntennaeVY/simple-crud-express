const User = require("../models/user.model");

module.exports.updateOneById = async (id, update) => {
  const query = await User.findByIdAndUpdate(id, update, { new: true });

  return query;
};
