const User = require("../../models/user.model");

module.exports.deleteOneById = async (id) => {
  return await User.findByIdAndDelete(id);
};
